import { Document } from "@/types/document.types";
import type { Hit as AlgoliaHit } from "instantsearch.js";

export default function HorizontalCard({ hit }: { hit: AlgoliaHit<Document> }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
      {/* <!-- Content Section --> */}
      <div className="flex-1">
        {/* <!-- Header Section --> */}
        <div className="flex items-center mb-4">
          <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">{hit.Area.Name}</span>
          <span className="text-gray-500 text-sm ml-4">30 November 2024</span>
        </div>
        
        {/* <!-- Title Section --> */}
        <h1 className="text-2xl font-bold text-gray-800 mb-3">{hit.Title}</h1>
        
        {/* <!-- Content Section --> */}
        <p className="text-gray-700 mb-6">{hit.Content}</p>
        
        {/* <!-- Footer Section --> */}
        <div className="flex justify-between items-center">
          {/* <!-- Authors Section --> */}
          <div className="flex flex-col">
            {hit.Authors.map((author, index) => (
              <div key={index} className="flex items-center mb-3">
                <img
                  src="https://placehold.co/40x40"
                  alt={`${author.FirstName} ${author.LastName}`}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <span className="text-gray-800 font-medium">{`${author.FirstName} ${author.LastName}`}</span>
              </div>
            ))}
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
      
      {/* <!-- Preview Image Section --> */}
      <div className="ml-6 flex-shrink-0 flex items-start">
        <img
          src="https://placehold.co/200x300"
          alt="Preview of cold water swimming"
          className="rounded-lg w-48 h-auto object-cover"
        />
      </div>
    </div>
  );
}
