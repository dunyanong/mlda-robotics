import { type Metadata } from "next";

import { Container } from "@/components/container";
import { Heading } from "@/components/elements/heading";
import { Subheading } from "@/components/elements/subheading";
import DynamicZoneManager from "@/components/dynamic-zone/manager";

// Hardcoded blog data
const getHardcodedBlogData = () => {
  return {
    id: 1,
    seo: {
      metaTitle: "MLDA Robo Blog - Latest Research and Insights",
      metaDescription: "Stay up to date with the latest MLDA Robo research, competition updates, and autonomous systems insights.",
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

export async function generateMetadata() {
  const blogPage = getHardcodedBlogData();
  return blogPage.seo;
}

export default async function BlogListingPage({
  params,
}: {
  params: { locale: string };
}) {
  const blogPage = getHardcodedBlogData();

  return (
    <>
      <Container className="py-20">
        <Heading>Blog</Heading>
        <Subheading className="max-w-3xl">
          Stay up to date with the latest LaunchPad features, performance tips, and industry insights.
        </Subheading>
      </Container>

      {blogPage.dynamic_zone && (
        <DynamicZoneManager dynamicZone={blogPage.dynamic_zone} locale={params.locale} />
      )}
    </>
  );
}
