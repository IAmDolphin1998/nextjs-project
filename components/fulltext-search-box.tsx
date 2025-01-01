import React from "react";
import { useSearchBox, UseSearchBoxProps, useStats } from "react-instantsearch";

function ResultsFound() {
  const {
    hitsPerPage,
    nbHits,
    areHitsSorted,
    nbSortedHits,
    nbPages,
    page,
    processingTimeMS,
    query,
  } = useStats();

  return (
    <>
      {/* <!-- Results Found --> */}
      <div className="text-sm font-medium text-gray-600">
        <span className="font-bold text-black">{nbHits.toLocaleString()}</span>{" "}
        results found{" "}
        {query ? (
          <>
            for <span className="font-bold text-black">{query}</span>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

function ResultsSearch(props: UseSearchBoxProps) {
  const { query, refine, clear } = useSearchBox(props);
  const [inputValue, setInputValue] = React.useState(query);

  return (
    <>
      {/* <!-- Results Search --> */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.currentTarget.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              // setInputValue(event.currentTarget.value);
              refine(event.currentTarget.value);
            }
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </>
  );
}

export default function FullTextSearchBox() {
  return (
    <>
      {/* <!-- Main Container --> */}
      <div className="flex items-center justify-between rounded-md bg-gray-100 p-4 shadow-md">
        <ResultsFound />
        {/* <!-- Search Boxes --> */}
        <div className="flex gap-4">
          {/* <!-- Author Search --> */}
          {/* 
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Cerca per autore..."
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <i className="fas fa-search absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400"></i>
          </div> 
          */}
          <ResultsSearch />
        </div>
      </div>
    </>
  );
}
