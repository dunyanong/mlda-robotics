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
        sub_heading: "Browse our team's research papers and technical reports in robotics and autonomous systems.",
        CTAs: [
          {
            text: "Submit Your Paper",
            URL: "/contactus",
            variant: "primary",
            target: "_self"
          },
          {
            text: "Read More",
            URL: "/projects",
            variant: "simple",
            target: "_self"
          }
        ]
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
            title: "Robust Autonomous Navigation in Dense Environments",
            description: "Dun Yan Ong, Sarah Chen, Michael Zhang. Presented at ICRA BARN 2024. Explores MPC and SLAM integration for real-world robotics.",
          },
          {
            title: "Mode Switching Logic for Nonlinear MPC",
            description: "Emily Rodriguez, James Liu. Published in Robotics Journal 2025. Details advanced control strategies for autonomous vehicles.",
          },
          {
            title: "LiDAR-Based Obstacle Detection and Avoidance",
            description: "Lisa Wang, Alex Kim. Conference on Autonomous Systems 2025. Focuses on perception and real-time obstacle handling.",
          }
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