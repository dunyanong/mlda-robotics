"use client";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";
import { motion } from "framer-motion";


export function Navbar({ data }: { data: any }) {
  return (
    <motion.nav
      className="max-w-7xl  fixed top-4  mx-auto inset-x-0 z-50 w-[95%] lg:w-full"
    >
      <div className="hidden lg:block w-full">
        {data?.left_navbar_items && (
          <DesktopNavbar leftNavbarItems={data?.left_navbar_items} rightNavbarItems={data?.right_navbar_items} logo={data?.logo} />
        )}

      </div>
      <div className="flex h-full w-full items-center lg:hidden ">
        {data?.left_navbar_items && (
          <MobileNavbar leftNavbarItems={data?.left_navbar_items} rightNavbarItems={data?.right_navbar_items} logo={data?.logo} />
        )}
      </div>
    </motion.nav>
  );
}