"use client";
import { PrismicNextImage } from "@prismicio/next";
import { Content } from "@prismicio/client";
import { useState } from "react";

type ContentListProps = {
  items: Content.BlogPostDocument[] | Content.ProjectDocument[];
  contentType: Content.BlogPostIndexSlice["primary"]["content_type"];
  fallbackItemImage: Content.BlogPostIndexSlice["primary"]["fallback_item_image"];
  viewMoreText: Content.BlogPostIndexSlice["primary"]["view_more_text"];
};

export default function ContentList({
  items,
  contentType,
  fallbackItemImage,
  viewMoreText = "Ver más",
}: ContentListProps) {
  const urlPrefix = contentType === "Blog" ? "/blog" : "/project";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <ul
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-0"
      >
        {items.map((post, index) => (
          <li key={index}>
            <a
              href={`${urlPrefix}/${post.uid}`}
              className=""
              aria-label={post.data.title || ""}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <PrismicNextImage
                field={hoveredIndex === index ? post.data.hover_image : post.data.image}
              />

              <div className="flex flex-col">
                <span className="text-1xl mt-2 uppercase">{post.data.title}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
