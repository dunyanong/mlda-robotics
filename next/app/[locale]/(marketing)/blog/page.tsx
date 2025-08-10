import { type Metadata } from "next";

import { Container } from "@/components/container";
import { Heading } from "@/components/elements/heading";
import { Subheading } from "@/components/elements/subheading";
import { BlogCard } from "@/components/blog-card";
import DynamicZoneManager from "@/components/dynamic-zone/manager";
import { generateMetadataObject } from "@/lib/shared/metadata";

// Hardcoded blog data
const getHardcodedBlogData = () => {
  return {
    id: 1,
    seo: {
      metaTitle: "MLDA Robotics Blog - Latest Research and Insights",
      metaDescription: "Stay up to date with the latest MLDA Robotics research, competition updates, and autonomous systems insights.",
    },
    dynamic_zone: [
      // {
      //   __component: "dynamic-zone.testimonials",
      //   id: 1,
      //   heading: "Recognition & Achievements",
      //   sub_heading: "See how our research and competition results have gained recognition in the robotics community.",
      // }
    ]
  };
};

const getHardcodedArticles = () => {
  return [
    {
      id: 1,
      title: "Our Journey to 2nd Place at ICRA BARN 2024",
      slug: "icra-barn-2024-second-place",
      description: "How we used classical Model Predictive Control with mode switching logic to achieve 2nd place in the prestigious ICRA BARN Challenge 2024.",
      publishedAt: "2024-06-15T10:00:00.000Z",
      image: {
        url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
        alternativeText: "ICRA BARN Competition Robot"
      }
    },
    {
      id: 2,
      title: "Model Predictive Control for Autonomous Navigation", 
      slug: "mpc-autonomous-navigation",
      description: "Deep dive into our MPC implementation with position, heading states, and wheel velocity controls for robust autonomous navigation.",
      publishedAt: "2024-07-20T14:30:00.000Z",
      image: {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
        alternativeText: "MPC Algorithm Visualization"
      }
    },
    {
      id: 3,
      title: "Mode Switching Logic for Different Navigation Scenarios",
      slug: "mode-switching-navigation",
      description: "Learn about our intelligent mode switching system: Safe mode, Obstacle Present mode, Close Obstacle mode, and Reversing mode.",
      publishedAt: "2024-08-25T09:15:00.000Z",
      image: {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        alternativeText: "Robot Navigation Modes"
      }
    },
    {
      id: 4,
      title: "Hector SLAM for Real-time Mapping",
      slug: "hector-slam-real-time-mapping",
      description: "How we integrated Hector mapping SLAM to continuously update our costmap for improved navigation accuracy.",
      publishedAt: "2024-09-01T11:45:00.000Z",
      image: {
        url: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&h=400&fit=crop",
        alternativeText: "SLAM Mapping Visualization"
      }
    },
    {
      id: 5,
      title: "LiDAR Processing and Obstacle Detection",
      slug: "lidar-processing-obstacle-detection",
      description: "Our approach to downsampling LiDAR data and combining it with costmap obstacles for efficient real-time processing.",
      publishedAt: "2024-09-15T16:20:00.000Z",
      image: {
        url: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&h=400&fit=crop",
        alternativeText: "LiDAR Sensor Technology"
      }
    },
    {
      id: 6,
      title: "Preparing for ICRA BARN 2025",
      slug: "preparing-icra-barn-2025",
      description: "As finalists for ICRA BARN 2025, we're pushing the boundaries of autonomous navigation even further with new innovations.",
      publishedAt: "2024-10-10T13:10:00.000Z",
      image: {
        url: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600&h=400&fit=crop",
        alternativeText: "Advanced Robotics Research"
      }
    }
  ];
};

export async function generateMetadata() {
  const blogPage = getHardcodedBlogData();
  return generateMetadataObject(blogPage.seo);
}

export default async function BlogListingPage({
  params,
}: {
  params: { locale: string };
}) {
  const blogPage = getHardcodedBlogData();
  const articles = getHardcodedArticles();

  return (
    <>
      <Container className="py-20">
        <Heading>Blog</Heading>
        <Subheading className="max-w-3xl">
          Stay up to date with the latest LaunchPad features, performance tips, and industry insights.
        </Subheading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {articles.map((article) => (
            <BlogCard
              key={article.id}
              article={article}
              locale={params.locale}
            />
          ))}
        </div>
      </Container>

      {blogPage.dynamic_zone && (
        <DynamicZoneManager dynamicZone={blogPage.dynamic_zone} locale={params.locale} />
      )}
    </>
  );
}
