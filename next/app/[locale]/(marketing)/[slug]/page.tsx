import React from "react";
import DynamicZoneManager from "@/components/dynamic-zone/manager";
import { Metadata } from 'next';
import { generateMetadataObject } from "@/lib/shared/metadata";
import ClientSlugHandler from "../ClientSlugHandler";

// Hardcoded pages data
const getHardcodedPages = () => {
  return [
    {
      id: 1,
      slug: "about",
      seo: {
        metaTitle: "About LaunchPad - Our Mission",
        metaDescription: "Learn about LaunchPad's mission to revolutionize content delivery worldwide.",
      },
      dynamic_zone: [
        {
          __component: "dynamic-zone.hero",
          id: 1,
          heading: "About LaunchPad",
          sub_heading: "We're on a mission to make content delivery faster and more reliable than ever before.",
        },
        {
          __component: "dynamic-zone.features",
          id: 2,
          heading: "Our Values",
          sub_heading: "Built on principles of speed, reliability, and innovation.",
        }
      ]
    },
    {
      id: 2,
      slug: "features",
      seo: {
        metaTitle: "LaunchPad Features - Content Delivery Solutions",
        metaDescription: "Discover all the powerful features that make LaunchPad the fastest content delivery platform.",
      },
      dynamic_zone: [
        {
          __component: "dynamic-zone.hero",
          id: 3,
          heading: "Powerful Features",
          sub_heading: "Everything you need to deliver content at warp speed.",
        },
        {
          __component: "dynamic-zone.features",
          id: 4,
          heading: "Core Features",
          sub_heading: "Discover what makes LaunchPad the fastest content delivery platform.",
        },
        {
          __component: "dynamic-zone.testimonials",
          id: 5,
          heading: "What our customers say",
          sub_heading: "See how our features have transformed businesses worldwide.",
        }
      ]
    },
    {
      id: 3,
      slug: "pricing",
      seo: {
        metaTitle: "LaunchPad Pricing - Choose Your Plan",
        metaDescription: "Simple, transparent pricing for all your content delivery needs. Start free today.",
      },
      dynamic_zone: [
        {
          __component: "dynamic-zone.hero",
          id: 6,
          heading: "Simple Pricing",
          sub_heading: "Choose the perfect plan for your content delivery needs.",
        },
        {
          __component: "dynamic-zone.pricing",
          id: 7,
          heading: "Plans & Pricing",
          sub_heading: "Start free and scale as you grow.",
        }
      ]
    }
  ];
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string };
}): Promise<Metadata> {
  const pages = getHardcodedPages();
  const page = pages.find(p => p.slug === params.slug);
  
  if (!page) {
    return {
      title: "Page Not Found",
      description: "The page you're looking for doesn't exist."
    };
  }

  return generateMetadataObject(page.seo);
}

export default async function DynamicSlugPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const pages = getHardcodedPages();
  const page = pages.find(p => p.slug === params.slug);

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-neutral-400">The page you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  const localizedSlugs = { [params.locale]: params.slug };

  return (
    <>
      <ClientSlugHandler localizedSlugs={localizedSlugs} />
      <DynamicZoneManager dynamicZone={page.dynamic_zone} locale={params.locale} />
    </>
  );
}