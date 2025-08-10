import React from "react";
import { Article } from "@/types/types";
import { LoadingLink } from "@/components/loading-link";
import { format } from "date-fns";
import { CustomImage } from "@/components/ui/image";

export const BlogCard = ({ article, locale }: { article: Article, locale: string }) => {
  return (
    <LoadingLink
      href={`/${locale}/blog/${article.slug}`}
      className="group relative block rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-colors"
    >
      <div className="aspect-video relative overflow-hidden">
        <CustomImage 
          src={article.image?.url || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"}
          alt={article.image?.alternativeText || article.title}
          width={600}
          height={400}
          className="object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="p-6">
        <time
          dateTime={article.publishedAt}
          className="text-neutral-400 text-sm"
        >
          {format(new Date(article.publishedAt), "MMMM dd, yyyy")}
        </time>
        <h3 className="text-white text-lg font-medium mt-2 group-hover:text-neutral-200 transition-colors">
          {article.title}
        </h3>
        {article.description && (
          <p className="text-neutral-400 text-sm mt-2 line-clamp-3">
            {article.description}
          </p>
        )}
      </div>
    </LoadingLink>
  );
};
