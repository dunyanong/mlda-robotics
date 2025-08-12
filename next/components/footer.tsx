import React from "react";
import { Container } from "./container";
import { Logo } from "./logo";

// Default footer data
const defaultFooterData = {
  logo: {
    id: 1,
    team: "MLDA Robotics",
    image: {
      url: "data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='200' height='200' fill='%23000000'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23FFFFFF' font-size='32' font-family='Arial, sans-serif'%3eMLDA%3c/text%3e%3c/svg%3e",
      alternativeText: "MLDA Robotics Logo"
    }
  },
  description: "Building autonomous systems under NTU MLDA@EEE.",
  copyright: "© 2025 MLDA Robotics Team. All rights reserved.",
  // built_with: "Built with Next.js, Tailwind CSS, Motion Animation Lib, and Aceternity UI",
  internal_links: [
    // { text: "About", URL: "/about", target: "_self" },
    { text: "Team", URL: "/en/team", target: "_self" },
    { text: "Papers", URL: "/en/papers", target: "_self" },
    { text: "Contact Us", URL: "/en/contactus", target: "_self" }
  ],
  // policy_links: [
  //   { text: "Privacy Policy", URL: "/privacy", target: "_self" },
  //   { text: "Terms of Service", URL: "/terms", target: "_self" },
  //   { text: "Contact", URL: "/contact", target: "_self" }
  // ],
  social_media_links: [
    { text: "GitHub", URL: "https://github.com/mlda-ntu", target: "_blank" },
    { text: "LinkedIn", URL: "https://linkedin.com/team/mlda-ntu", target: "_blank" },
    { text: "Instagram", URL: "https://instagram.com/mlda_ntu", target: "_blank" }
  ]
};

export const Footer = ({ 
  footer = defaultFooterData
}: { 
  footer?: any
}) => {
  return (
    <footer className="border-t border-neutral-800 px-8 pt-20 pb-8 relative overflow-hidden bg-black">
      <Container className="flex flex-col items-start justify-start">
        <div className="md:flex items-start justify-between w-full">
          <div className="md:w-1/2">
            <Logo image={footer?.logo?.image} />
            <div className="text-sm text-neutral-500 mt-2 md:w-1/2">
              {footer?.description}
            </div>
            <div className="mt-2">
              {footer?.built_with}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 items-end mt-10 md:mt-0">
            <div className="flex flex-col space-y-4">
              <p className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-medium">
                MLDA@EEE
              </p>
              {footer?.internal_links?.map((link: any, index: number) => (
                <a
                  key={index}
                  href={link.URL}
                  target={link.target}
                  className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm"
                >
                  {link.text}
                </a>
              ))}
            </div>
            {/* <div className="flex flex-col space-y-4">
              <p className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-medium">
                Legal
              </p>
              {footer?.policy_links?.map((link: any, index: number) => (
                <a
                  key={index}
                  href={link.URL}
                  target={link.target}
                  className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm"
                >
                  {link.text}
                </a>
              ))}
            </div> */}
          </div>
        </div>
      </Container>
    </footer>
  );
};