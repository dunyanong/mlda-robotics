"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSlugContext } from "@/app/context/SlugContext";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const { state } = useSlugContext();
  const { localizedSlugs } = state;

  const pathname = usePathname(); // Current path

  // Return early if no pathname available
  if (!pathname) return null;

  const segments = pathname.split("/"); // Split path into segments

  // Generate localized path for each locale
  const generateLocalizedPath = (locale: string): string => {
    if (!pathname) return `/${locale}`; // Default to root path for the locale

    const pathSegments = [...segments]; // Create a copy to avoid mutating original

    // Handle homepage (e.g., "/en" -> "/fr")
    if (pathSegments.length <= 2) {
      return `/${locale}`;
    }

    // Handle dynamic paths (e.g., "/en/blog/[slug]")
    if (localizedSlugs && localizedSlugs[locale]) {
      pathSegments[1] = locale; // Replace the locale
      pathSegments[pathSegments.length - 1] = localizedSlugs[locale]; // Replace slug if available
      return pathSegments.join("/");
    }

    // Fallback to replace only the locale
    pathSegments[1] = locale;
    return pathSegments.join("/");
  };

  // Get available locales - if localizedSlugs is empty, fall back to just the current locale
  const availableLocales =
    localizedSlugs && Object.keys(localizedSlugs).length > 0
      ? Object.keys(localizedSlugs)
      : ["en", "fr"]; // Add your supported locales here

  return (
    <div className="flex gap-2 p-1 rounded-md">
      {!pathname.includes("/products/") &&
        availableLocales.map((locale) => {
          const href = generateLocalizedPath(locale);
          // Only render if we have a valid href
          if (!href) return null;

          return (
            <Link key={locale} href={href}>
              <div
                className={cn(
                  "flex cursor-pointer items-center justify-center text-sm leading-[110%] w-8 py-1 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_var(--neutral-600)_inset] transition duration-200",
                  locale === currentLocale
                    ? "bg-neutral-800 text-white shadow-[0px_1px_0px_0px_var(--neutral-600)_inset]"
                    : ""
                )}
              >
                {locale}
              </div>
            </Link>
          );
        })}
    </div>
  );
}
