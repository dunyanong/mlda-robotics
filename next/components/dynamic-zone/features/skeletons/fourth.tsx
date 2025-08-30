"use client";
import React, { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IconContainer } from "../icon-container";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MetaIcon,
  SlackIcon,
  TiktokIcon,
  TwitterIcon,
  // GithubIcon,
} from "@/components/icons/illustrations";

var loopInterval: NodeJS.Timeout;
export const SkeletonFour = () => {
  const icons = useMemo(
    () => [
      {
        title: "Instagram",
        icon: InstagramIcon,
        className: "left-1/2 top-1/2",
      },
      {
        title: "LinkedIn",
        icon: LinkedInIcon,
        className: "right-40 top-0",
      },
      // {
      //   title: "GitHub",
      //   icon: GithubIcon,
      //   className: "right-20 bottom-0",
      // },
    ],
    []
  );

  const [active, setActive] = useState(icons[0]);

  useEffect(() => {
    loopInterval = setInterval(() => {
      setActive(icons[Math.floor(Math.random() * icons.length)]);
    }, 3000);
    return () => clearInterval(loopInterval);
  }, [icons]);

  return (
    <div className="p-8 overflow-hidden h-full relative flex flex-col group [perspective:8000px] [transform-style:preserve-3d]">
      {icons.map((icon) => (
        <IconContainer
          className={cn(
            "rounded-full opacity-20 mx-2 absolute",
            icon.className,
            active.title === icon.title && "opacity-100"
          )}
          key={icon.title}
        >
          {<icon.icon />}
          {active.title === icon.title && (
            <motion.div
              layoutId="bubble"
              className="absolute h-16 w-16 inset-0 rounded-full border-2  -ml-0.5 -mt-0.5 border-indigo-500"
            ></motion.div>
          )}
        </IconContainer>
      ))}
    </div>
  );
};
