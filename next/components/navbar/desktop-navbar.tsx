"use client";
import { Logo } from "@/components/logo";
import { Button } from "@/components/elements/button";
import { NavbarItem } from "./navbar-item";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "next-view-transitions";
import { LocaleSwitcher } from "../locale-switcher";

// Default navbar data
const defaultLeftNavbarItems = [
  { URL: "/", text: "Home", target: "_self" },
  { URL: "/team", text: "Team", target: "_self" },
  { URL: "/papers", text: "Papers", target: "_self" },
  { URL: "/contactus", text: "Contact Us", target: "_self" },];

const defaultRightNavbarItems: {
  URL: string;
  text: string;
  target?: string;
}[] = [
  { URL: "/contact", text: "Join Us", target: "_self" }
];

const defaultLogo = {
  id: 1,
  company: "MLDA Robotics",
  image: {
    url: "data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='200' height='200' fill='%23000000'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23FFFFFF' font-size='32' font-family='Arial, sans-serif'%3eMLDA%3c/text%3e%3c/svg%3e",
    alternativeText: "MLDA Robotics Logo",
  },
};

type Props = {
  leftNavbarItems?: {
    URL: string;
    text: string;
    target?: string;
  }[];
  rightNavbarItems?: {
    URL: string;
    text: string;
    target?: string;
  }[];
  logo?: any;
  locale: string;
};

export const DesktopNavbar = ({
  leftNavbarItems = defaultLeftNavbarItems,
  rightNavbarItems = defaultRightNavbarItems,
  logo = defaultLogo,
  locale,
}: Props) => {
  const { scrollY } = useScroll();

  const [showBackground, setShowBackground] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  });
  return (
    <motion.div
      className={cn(
        "w-full flex relative justify-between px-4 py-4 mx-auto z-[60] transition duration-200",
        showBackground &&
          " bg-neutral-900 shadow-[0px_-2px_0px_0px_var(--neutral-800),0px_2px_0px_0px_var(--neutral-800)]"
      )}
      animate={{
        width: showBackground ? "95%" : "100%",
        borderRadius: showBackground ? "12px" : "0px",
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <AnimatePresence>
        {showBackground && (
          <motion.div
            key="navbar-bg"
            className="absolute inset-0 h-full w-full bg-neutral-900 pointer-events-none rounded-md"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          />
        )}
      </AnimatePresence>
      <div className="flex flex-row gap-2 items-center">
        <Logo image={logo?.image} locale={locale} />
        <div className="flex items-center gap-1.5">
          {leftNavbarItems.map((item, idx) => (
            <NavbarItem
              href={`/${locale}${item.URL}`}
              key={`link=${idx}`}
              target={item.target}
            >
              {item.text}
            </NavbarItem>
          ))}
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <LocaleSwitcher currentLocale={locale} />
        {rightNavbarItems.map((item, idx) => (
          <Link
            href={item.URL ? `/${locale}${item.URL}` : '#'}
            key={`link=${idx}`}
            target={item.target}
          >
            <Button>{item.text}</Button>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};
