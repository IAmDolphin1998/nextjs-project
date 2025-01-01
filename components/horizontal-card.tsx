import { Snippet } from "react-instantsearch";
import { Document } from "@/types/document.types";
import type { Hit as AlgoliaHit } from "instantsearch.js";

export default function HorizontalCard({ hit }: { hit: AlgoliaHit<Document> }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      {/* <!-- Header Section --> */}
      <div className="mb-4 flex items-center">
        <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
          {hit.Area.Name}
        </span>
        <span className="text-gray-500 text-sm ml-4">30 November 2024</span>
      </div>

      {/* <!-- Content Section --> */}
      <div className="flex gap-6">
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
          <img
            src="https://placehold.co/200x200"
            alt="Preview of cold water swimming"
            className="rounded-lg w-48 h-auto object-cover"
          />
        </div>
      </div>

      {/* <!-- Footer Section --> */}
      <div className="mt-1 flex items-center justify-between">
        {/* <!-- Authors Section --> */}
        <div className="flex items-center">
          {/* <!-- Overlapping Avatars --> */}
          <div className="flex -space-x-4 rtl:space-x-reverse">
            {hit.Authors.map((author, index) => (
              <img
                key={index}
                src="https://placehold.co/40x40"
                alt={`${author.FirstName} ${author.LastName} profile picture`}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            ))}
          </div>

          {/* <!-- Author Names --> */}
          <div className="ml-4 text-sm">
            {hit.Authors.map(
              (author) => author.FirstName + " " + author.LastName
            ).join(", ")}
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
