import React from "react";

import { Link } from "next-view-transitions";
import { BlurImage } from "./blur-image";

import { Image } from "@/types/types";

export const Logo = ({ image, locale }: { image?: Image, locale?: string }) => {
  // Use a default logo if no image is provided - using a data URL instead of via.placeholder.com
  const logoUrl = image?.url || "data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='200' height='200' fill='%23000000'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23FFFFFF' font-size='32' font-family='Arial, sans-serif'%3eMLDA%3c/text%3e%3c/svg%3e";
  const logoAlt = image?.alternativeText || "MLDA Robo Logo";

  return (
    <Link
      href={`/${locale || 'en'}`}
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black   relative z-20"
    >
      <BlurImage
        src={logoUrl}
        alt={logoAlt}
        width={200}
        height={200}
        className="h-10 w-10 rounded-xl mr-2"
      />

      <span className="text-white font-bold">MLDA Robo</span>
    </Link>
  );
};
