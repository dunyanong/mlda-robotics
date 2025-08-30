import React from "react";
import DynamicZoneManager from "@/components/dynamic-zone/manager";
import { generateMetadataObject } from "@/lib/shared/metadata";

// Hardcoded page data
const getHardcodedPageData = () => {
  return {
    id: 1,
    slug: "home",
    seo: {
      metaTitle: "MLDA Robo Team - Building Autonomous Systems",
      metaDescription: "Robotics Team under NTU EEE and MLDA@EEE, building autonomous systems",
    },
    dynamic_zone: [
      {
        __component: "dynamic-zone.hero",
        id: 1,
        heading: "Building Autonomous Systems",
        sub_heading: "Robotics Team under NTU EEE and MLDA@EEE. Building the future of robotics with cutting-edge autonomous navigation systems.",
        CTAs: [
          {
            text: "Join Our Team",
            URL: "https://docs.google.com/forms/d/e/1FAIpQLSe2YGzSc73LTPySFZUIff1uZj9co2wXElG8HrG16B_U1JzsjA/viewform",
            variant: "primary",
            target: "_self"
          }
        ]
      },
      {
        __component: "dynamic-zone.features",
        id: 10,
        heading: "Who are we?",
        sub_heading: "We are a passionate robotics team under NTU EEE and MLDA@EEE, focused on building autonomous systems and pushing the boundaries of robotics research.",
      },
      {
        __component: "dynamic-zone.features",
        id: 11,
        heading: "Competitions",
        sub_heading: "Major milestones and achievements in robotics competitions.",
        steps: [
          {
            title: "ICRA BARN Challenge 2024",
            description: "Clinched 2nd place with our advanced autonomous navigation system at Yokohama, Japan.",
          },
          {
            title: "ICRA BARN Challenge 2025",
            description: "Finalist, we will come back stronger with more innovations!"
          }
        ]
      },
      {
        __component: "dynamic-zone.brands",
        id: 4,
        heading: "Backed by Excellence",
        sub_heading: "Supported by world-class institutions and powered by cutting-edge technology.",        
      },
      {
        __component: "dynamic-zone.cta",
        id: 5,
        heading: "Ready to Join Us?",
        sub_heading: "We're recruiting talented students in Semester 1 and 2. Be part of building the future of autonomous systems.",
        CTAs: [
          {
            text: "Apply Now",
            URL: "https:/docs.google.com/forms/d/e/1FAIpQLSe2YGzSc73LTPySFZUIff1uZj9co2wXElG8HrG16B_U1JzsjA/viewform",
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
