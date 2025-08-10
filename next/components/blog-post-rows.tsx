"use client";
import { truncate } from "@/lib/utils";
import { format } from "date-fns";
import { Link } from "next-view-transitions";
import React, { useEffect, useState } from "react";
import FuzzySearch from "fuzzy-search";
import { Article } from "@/types/types";

export const BlogPostRows = ({ articles }: { articles: Article[] }) => {
  const [search, setSearch] = useState("");

  const searcher = new FuzzySearch(articles, ["title"], {
    caseSensitive: false,
  });

  const [results, setResults] = useState(articles);
  useEffect(() => {
    const results = searcher.search(search);
    setResults(results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="w-full py-20">
      <div className="flex sm:flex-row flex-col justify-between gap-4 items-center mb-10">
        <p className="text-2xl font-bold text-white">More Posts</p>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search articles"
          className="text-sm min-w-full sm:min-w-96  p-2 rounded-md bg-neutral-800 border-none  focus:ring-0 focus:outline-none outline-none text-neutral-200 placeholder-neutral-400"
        />
      </div>

      <div className="divide-y divide-neutral-800">
        {results.length === 0 ? (
          <p className="text-neutral-400 text-center p-4">No results found</p>
        ) : (
          results.map((article, index) => (
            <BlogPostRow article={article} key={article.slug + index} />
          ))
        )}
      </div>
    </div>
  );
};
