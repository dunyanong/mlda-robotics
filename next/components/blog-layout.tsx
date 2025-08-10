import { IconArrowLeft } from "@tabler/icons-react";
import { Container } from "./container";
import { Link } from "next-view-transitions";
import { format } from "date-fns";
import { CustomImage } from "@/components/ui/image";
import DynamicZoneManager from "./dynamic-zone/manager";
import { Article } from "@/types/types";

export async function BlogLayout({
  article,
  locale,
  children,
}: {
  article: Article;
  locale: string;
  children: React.ReactNode;
}) {
  return (
    <Container className="flex flex-col lg:flex-row gap-10 lg:gap-20 py-20">
      <div className="flex-1">
        <Link
          href={`/${locale}/blog`}
          key="back-to-blog"
          className="text-neutral-400 text-sm flex items-center mb-10"
        >
          <IconArrowLeft className="mr-2 h-4 w-4" />
          Back to blog
        </Link>

        <header>
          <h1 className="text-5xl md:text-6xl leading-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white pb-6">
            {article.title}
          </h1>
        </header>
        <div className="mt-8 prose prose-sm prose-invert">
          {children}
        </div>
        <div className="flex space-x-2 items-center pt-12 border-t border-neutral-800 mt-12">
          <div className="flex space-x-2 items-center ">
            {/* Commented out author section as it was dependent on Strapi
            <CustomImage 
              src={article.authorAvatar}
              alt={article.author}
              width={20}
              height={20}
              className="rounded-full h-5 w-5"
            />
            <p className="text-sm font-normal text-muted">
              {article.author}
            </p> */}
          </div>
          <div className="h-5 rounded-lg w-0.5 bg-neutral-700" />
          <time
            dateTime={article.publishedAt}
            className="flex items-center text-base "
          >
            <span className="text-muted text-sm">
              {format(new Date(article.publishedAt), "MMMM dd, yyyy")}
            </span>
          </time>
        </div>
      </div>
      {article.dynamic_zone && (
        <aside className="lg:w-1/3">
          <DynamicZoneManager dynamicZone={article.dynamic_zone} locale={locale} />
        </aside>
      )}
    </Container>
  );
}
