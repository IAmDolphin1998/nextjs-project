"use client";

import React from "react";
import FiltersBox from "./filters-box";
import ListingCards from "./listing-cards";
import { Configure } from "react-instantsearch";
import StyledPagination from "./styled-pagination";
import FullTextSearchBox from "./fulltext-search-box";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import { liteClient as algoliasearch } from "algoliasearch/lite";

const searchClient = algoliasearch(
  "V1O1Y893BB",
  "38e9cbad717ef476b439bd62484bb56d"
);

export default function SearchInterface() {
  const [author, setAuthor] = React.useState("");

  return (
    <InstantSearchNext
      indexName={`${process.env.NODE_ENV}_document_index`}
      searchClient={searchClient}
      routing={{
        router: {
          cleanUrlOnDispose: false,
          windowTitle(routeState) {
            const indexState =
              routeState[`${process.env.NODE_ENV}_document_index`] || {};
            return indexState.query
              ? `UniPaper - Results for: ${indexState.query}`
              : "UniPaper - Results page";
          },
        },
      }}
      future={{
        preserveSharedStateOnUnmount: false,
      }}
    >
      <Configure filters={author ? `Authors.Name:"${author}"` : ""} />

      <div className="grid grid-cols-12 gap-5 w-full">
        {/* <!-- Left Side --> */}
        <div className="flex flex-col gap-5 col-span-12 md:col-span-3">
          <div className="rounded-lg bg-gray-100 p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Filter by Category
            </h2>
            <FiltersBox attribute="Area.Name" operator="and" />
          </div>

          <div className="rounded-lg bg-gray-100 p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Filter by Tag
            </h2>
            <FiltersBox attribute="Tags.Name" />
          </div>
        </div>

        {/* <!-- Right Side --> */}
        <div className="grid gap-5 col-span-12 md:col-span-9">
          <FullTextSearchBox setAuthor={setAuthor} />
          <ListingCards />
          <StyledPagination />
        </div>
      </div>
    </InstantSearchNext>
  );
}
