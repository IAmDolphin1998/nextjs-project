import { Snippet } from "react-instantsearch";
import { Document } from "@/types/document.types";
import type { Hit as AlgoliaHit } from "instantsearch.js";
import FallbackImage from "./fallback-image";

export default function HorizontalCard({ hit }: { hit: AlgoliaHit<Document> }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      {/* <!-- Header Section --> */}
      <div className="mb-4 flex items-center">
        <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
          {hit.Area.Name}
        </span>
        {hit.Date ? (
          <span className="text-gray-500 text-sm ml-2">
            {new Date(hit.Date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        ) : (
          <></>
        )}
      </div>

      {/* <!-- Content Section --> */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* <!-- Text Content Section --> */}
        <div className="flex-1">
          {/* <!-- Title Section --> */}
          <h1 className="mb-3 text-2xl font-bold text-gray-800">{hit.Title}</h1>

          {/* <!-- Content Section --> */}
          <Snippet
            className="mb-6 text-gray-700"
            hit={hit}
            attribute="Content"
          />
        </div>

        {/* <!-- Preview Image Section --> */}
        <div className="flex-shrink-0">
          <FallbackImage
            src={
              hit.Thumbnail && hit.Thumbnail.url
                ? hit.Thumbnail.url
                : "/images/placeholder.jpg"
            }
            fallbackSrc="/images/placeholder.jpg"
            alt={
              hit.Thumbnail && hit.Thumbnail.alternativeText
                ? hit.Thumbnail.alternativeText
                : "No Alternative Text"
            }
            className="rounded-lg w-48 h-auto object-cover"
            width={200}
            height={200}
          />
        </div>
      </div>

      {/* <!-- Footer Section --> */}
      <div className="mt-1 flex items-center justify-between">
        {/* <!-- Authors Section --> */}
        <div className="flex flex-col md:flex-row items-center">
          {/* <!-- Overlapping Avatars --> */}
          <div className="flex -space-x-4 rtl:space-x-reverse">
            {hit.Authors.map((author, index) => (
              <FallbackImage
                key={index}
                src={
                  author.Avatar && author.Avatar.url
                    ? author.Avatar.url
                    : "/images/placeholder.jpg"
                }
                fallbackSrc="/images/placeholder.jpg"
                alt={`${author.Name} profile picture`}
                className="w-10 h-10 rounded-full border-2 border-white"
                width={40}
                height={40}
              />
            ))}
          </div>

          {/* <!-- Author Names --> */}
          <div className="ml-2 text-sm">
            {hit.Authors.map((author) => author.Name).join(", ")}
          </div>
        </div>

        {/* <!-- Tags Section --> */}
        <div className="flex flex-wrap gap-2">
          {hit.Tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-600 text-sm px-3 py-1 rounded-full"
            >
              {tag.Name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
