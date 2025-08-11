"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useLoading } from "./loading-provider";
import { cn } from "@/lib/utils";

interface LoadingLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  replace?: boolean;
  scroll?: boolean;
  target?: string;
}

export const LoadingLink = ({ 
  href, 
  children, 
  className, 
  replace = false, 
  scroll = true,
  target = "_self",
  ...props 
}: LoadingLinkProps) => {
  const router = useRouter();
  const { setLoading } = useLoading();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Don't handle if it's an external link or opening in new tab
    if (target === "_blank" || href.startsWith("http") || href.startsWith("mailto")) {
      return;
    }

    // Don't handle if cmd/ctrl + click (opening in new tab)
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    // Prevent loading if clicking the same page
    const currentUrl = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    if (href === pathname || href === currentUrl) {
      e.preventDefault();
      setLoading(false); 
      return;
    }

    e.preventDefault();
    setLoading(true);

    // Small delay to show loading animation
    setTimeout(() => {
      if (replace) {
        router.replace(href, { scroll });
      } else {
        router.push(href, { scroll });
      }
    }, 100);
  };

  return (
    <Link 
      href={href} 
      className={className} 
      onClick={handleClick}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};