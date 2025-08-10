import React from "react";
import DynamicZoneManager from "@/components/dynamic-zone/manager";
import { generateMetadataObject } from "@/lib/shared/metadata";

// Hardcoded page data
const getHardcodedPageData = () => {
  return {
    id: 1,
    slug: "home",
    seo: {
      metaTitle: "MLDA Robotics Team - Building Autonomous Systems",
      metaDescription: "MLDA Robotics Team under NTU EEE, building autonomous systems. 2nd place ICRA BARN 2024, Finalist ICRA BARN 2025.",
    },
    dynamic_zone: [
      {
        __component: "dynamic-zone.hero",
        id: 1,
        heading: "Building Autonomous Systems",
        sub_heading: "MLDA Robotics Team under NTU EEE. 2nd place ICRA BARN 2024, Finalist ICRA BARN 2025. Pioneering the future of robotics with cutting-edge autonomous navigation systems.",
        CTAs: [
          {
            text: "Join Our Team",
            URL: "/contactus",
            variant: "primary",
            target: "_self"
          },
          {
            text: "Our Projects",
            URL: "/projects",
            variant: "simple",
            target: "_self"
          }
        ]
      },
      {
        __component: "dynamic-zone.features",
        id: 2,
        heading: "Our Expertise",
        sub_heading: "From classical MPC to cutting-edge SLAM, we build robust autonomous systems that win competitions.",
      },
      {
        __component: "dynamic-zone.brands",
        id: 4,
        heading: "Backed by Excellence",
        sub_heading: "Supported by world-class institutions and powered by cutting-edge technology.",
        // Brands will use their default hardcoded data
      },
      {
        __component: "dynamic-zone.cta",
        id: 5,
        heading: "Ready to Join Us?",
        sub_heading: "We're recruiting talented engineers in Semester 1 and 2. Be part of building the future of autonomous systems.",
        CTAs: [
          {
            text: "Apply Now",
            URL: "/contactus",
            variant: "primary",
            target: "_self"
          },
          {
            text: "Learn More",
            URL: "/contactus",
            variant: "simple",
            target: "_self"
          }
        ]
      }
    ]
  };
};

export async function generateMetadata() {
  const page = getHardcodedPageData();
  return generateMetadataObject(page.seo);
}

export default async function MarketingPage() {
  const page = getHardcodedPageData();

  return (
    <DynamicZoneManager dynamicZone={page.dynamic_zone} locale="en" />
  );
}
