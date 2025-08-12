import React from "react";
import DynamicZoneManager from "@/components/dynamic-zone/manager";
import { generateMetadataObject } from "@/lib/shared/metadata";

// Hardcoded technical papers page data
const getPaperPageData = () => {
  return {
    id: 1,
    slug: "papers",
    seo: {
      metaTitle: "MLDA Robotics Team - Technical Papers",
      metaDescription: "Explore technical papers and publications from the MLDA Robotics Team at NTU EEE and MLDA@EEE.",
    },
    dynamic_zone: [
      {
        __component: "dynamic-zone.hero",
        id: 1,
        heading: "Technical Papers & Publications",
        sub_heading: "Browse our team's research papers and technical reports in robotics and autonomous systems."
      },
      {
        __component: "dynamic-zone.features",
        id: 2,
        heading: "Featured Papers",
        sub_heading: "Recent technical papers from our team.",
        globe_card: null,
        ray_card: null,
        graph_card: null,
        social_media_card: null,
        steps: [
          {
            title: "ICRA 2025",
            description: "Details advanced control strategies for autonomous vehicles.",
            CTA: {
              text: "Read More",
              URL: "/papers/barn25_report.pdf",
              variant: "simple",
              target: "_self",
            },
          },
          {
            title: "ICRA 2024",
            description: "Explores MPC and SLAM integration for real-world robotics.",
            CTA: {
              text: "Read More",
              URL: "/papers/barn24_report.pdf",
              variant: "simple",
              target: "_self",
            },
          },
        ]
      },
      {
        __component: "dynamic-zone.cta",
        id: 3,
        heading: "Interested in Collaborating?",
        sub_heading: "Contact us to discuss research opportunities or join our team.",
        CTAs: [
          {
            text: "Contact Us",
            URL: "/contactus",
            variant: "primary",
            target: "_self"
          }
        ]
      }
    ]
  };
};

export async function generateMetadata() {
  const page = getPaperPageData();
  return generateMetadataObject(page.seo);
}

export default async function PaperPage() {
  const page = getPaperPageData();

  return (
    <DynamicZoneManager dynamicZone={page.dynamic_zone} locale="en" />
  );
}