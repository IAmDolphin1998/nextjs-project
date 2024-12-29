"use client";

import ListingCards from "./listing-cards";
import { RefinementList, SearchBox } from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import { liteClient as algoliasearch } from "algoliasearch/lite";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCHAPI_KEY
);

export default function SearchInterface() {
  return (
    <InstantSearchNext
      indexName={`${process.env.NODE_ENV}_document_index`}
      searchClient={searchClient}
      routing={{
        router: {
          cleanUrlOnDispose: false,
          windowTitle(routeState) {
            const indexState = routeState.indexName || {};
            return indexState.query
              ? `UniPaper - Results for: ${indexState.query}`
              : "UniPaper - Results page";
          },
        },
      }}
      future={{
        preserveSharedStateOnUnmount: true,
      }}
    >
      <div
        className="grid w-full gap-5"
        style={{
          grid: "'left .' / 20% 80%",
        }}
      >
        {/* <!-- Left Side --> */}
        <div className="flex flex-col gap-5" style={{ gridArea: "left" }}>
          <RefinementList attribute="Area.Name" operator="and" />
          <RefinementList attribute="Tags.Name" />
        </div>

        {/* <!-- Right Side --> */}
        <div className="flex flex-col gap-5">
          <SearchBox />
          <ListingCards />
        </div>
      </div>
    </InstantSearchNext>
  );
}
