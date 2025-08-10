import React from "react";
import { BlogLayout } from "@/components/blog-layout";
import ClientSlugHandler from "../../ClientSlugHandler";

// Hardcoded article data
const getHardcodedArticle = (slug: string) => {
  const articles = [
    {
      id: 1,
      title: "Getting Started with LaunchPad",
      slug: "getting-started-with-launchpad",
      description: "Learn how to set up and configure LaunchPad for your content delivery needs.",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "LaunchPad is the fastest way to deliver your content to users worldwide. In this guide, we'll walk you through the setup process and show you how to get the most out of our platform."
            }
          ]
        },
        {
          type: "heading",
          level: 2,
          children: [
            {
              type: "text",
              text: "What is LaunchPad?"
            }
          ]
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "LaunchPad is a cutting-edge content delivery network (CDN) that helps you serve your content at lightning speed. With global edge locations and intelligent caching, your users will experience faster load times regardless of their location."
            }
          ]
        }
      ],
      publishedAt: "2024-01-15T10:00:00.000Z",
      image: {
        url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
        alternativeText: "Getting Started with LaunchPad"
      },
      localizations: []
    },
    {
      id: 2,
      title: "Optimizing Performance with LaunchPad",
      slug: "optimizing-performance-with-launchpad",
      description: "Discover advanced techniques to maximize your content delivery performance.",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "Performance optimization is crucial for user experience and SEO. LaunchPad provides several tools and techniques to help you achieve the best possible performance for your content delivery."
            }
          ]
        }
      ],
      publishedAt: "2024-01-20T14:30:00.000Z",
      image: {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        alternativeText: "Optimizing Performance"
      },
      localizations: []
    },
    {
      id: 3,
      title: "Security Best Practices",
      slug: "security-best-practices",
      description: "Learn how to secure your content delivery with LaunchPad's advanced security features.",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "Security is paramount when delivering content to users. LaunchPad offers comprehensive security features including DDoS protection, SSL/TLS encryption, and access controls to keep your content safe."
            }
          ]
        }
      ],
      publishedAt: "2024-01-25T09:15:00.000Z",
      image: {
        url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
        alternativeText: "Security Best Practices"
      },
      localizations: []
    }
  ];

  return articles.find(article => article.slug === slug);
};

// Simple content renderer for hardcoded content
const ContentRenderer = ({ content }: { content: any[] }) => {
  return (
    <div className="prose prose-invert max-w-none">
      {content.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={`paragraph-${index}`}>
                {block.children.map((child: any, childIndex: number) => (
                  <span key={`text-${childIndex}`}>{child.text}</span>
                ))}
              </p>
            );
          case 'heading':
            if (block.level === 1) {
              return (
                <h1 key={`heading-${index}`}>
                  {block.children.map((child: any, childIndex: number) => (
                    <span key={`heading-text-${childIndex}`}>{child.text}</span>
                  ))}
                </h1>
              );
            } else if (block.level === 2) {
              return (
                <h2 key={`heading-${index}`}>
                  {block.children.map((child: any, childIndex: number) => (
                    <span key={`heading-text-${childIndex}`}>{child.text}</span>
                  ))}
                </h2>
              );
            } else if (block.level === 3) {
              return (
                <h3 key={`heading-${index}`}>
                  {block.children.map((child: any, childIndex: number) => (
                    <span key={`heading-text-${childIndex}`}>{child.text}</span>
                  ))}
                </h3>
              );
            } else {
              return (
                <h4 key={`heading-${index}`}>
                  {block.children.map((child: any, childIndex: number) => (
                    <span key={`heading-text-${childIndex}`}>{child.text}</span>
                  ))}
                </h4>
              );
            }
          default:
            return null;
        }
      })}
    </div>
  );
};

export default async function SingleArticlePage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const article = getHardcodedArticle(params.slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-neutral-400">The article you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  const localizedSlugs = { [params.locale]: params.slug };

  return (
    <BlogLayout article={article} locale={params.locale}>
      <ClientSlugHandler localizedSlugs={localizedSlugs} />
      <ContentRenderer content={article.content} />
    </BlogLayout>
  );
}
