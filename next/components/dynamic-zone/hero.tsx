"use client";
import React from "react";
import Link from "next/link";

import { Heading } from "../elements/heading";
import { Subheading } from "../elements/subheading";
import { Button } from "../elements/button";
import { Cover } from "../decorations/cover";
import { motion } from "framer-motion";

export const Hero = ({ heading, sub_heading, CTAs, locale }: { heading: string; sub_heading: string; CTAs: any[], locale: string }) => {
  return (
    <div className="min-h-screen overflow-hidden relative flex flex-col items-center justify-center px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute inset-0 w-full h-full z-0"
      >
      </motion.div>
      <Heading
        as="h1"
        className="text-3xl xs:text-4xl md:text-4xl lg:text-8xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-10 py-6"
      >
        {heading.substring(0, heading.lastIndexOf(" "))} <Cover>{heading.split(" ").pop()}</Cover>
      </Heading>
      <Subheading className="text-center mt-2 md:mt-6 text-base md:text-xl text-muted max-w-3xl mx-auto relative z-10">
        {sub_heading}
      </Subheading>
      <div className="flex flex-col sm:flex-row gap-2 items-center mt-8 z-10">
        {CTAs && CTAs.map((cta, index) => {
          const isInternal = cta?.URL && (cta.URL.startsWith("/") && !cta.URL.startsWith("//"));
          const isExternal = cta?.URL && (cta.URL.startsWith("http://") || cta.URL.startsWith("https://"));
          const href = cta?.URL
            ? isInternal
              ? `/${locale}${cta.URL}`.replace(/\/\/+/, "/")
              : cta.URL
            : '#';
          if (isExternal) {
            return (
              <a
                key={cta?.id || `cta-${index}`}
                href={href}
                target={cta.target || "_blank"}
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant={cta.variant} className="w-full sm:w-auto">{cta.text}</Button>
              </a>
            );
          }
          return (
            <Button
              key={cta?.id || `cta-${index}`}
              as={Link}
              href={href}
              {...(cta.variant && { variant: cta.variant })}
              className="w-full sm:w-auto"
            >
              {cta.text}
            </Button>
          );
        })}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 sm:h-80 w-full bg-gradient-to-t from-charcoal to-transparent pointer-events-none z-20" />
    </div>
  );
};
