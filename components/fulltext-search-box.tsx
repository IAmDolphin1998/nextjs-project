import React from "react";
import { useSearchBox, UseSearchBoxProps, useStats } from "react-instantsearch";

function ResultsFound() {
  const { nbHits, query } = useStats();

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

type AuthorSearchProps = {
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
};
function AuthorSearch({ setAuthor }: AuthorSearchProps) {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <>
      {/* <!-- Author Search --> */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search by Author..."
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.currentTarget.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setAuthor(searchTerm);
            }
          }}
        />
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
          onClick={(event) => {
            setAuthor(searchTerm);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

function ResultsSearch(props: UseSearchBoxProps) {
  const { query, refine } = useSearchBox(props);
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
              refine(event.currentTarget.value);
            }
          }}
        />
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
          onClick={(event) => {
            refine(inputValue);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

type FullTextSearchBoxProps = AuthorSearchProps;
export default function FullTextSearchBox({
  setAuthor,
}: FullTextSearchBoxProps) {
  return (
    <>
      {/* <!-- Main Container --> */}
      <div className="flex flex-col sm:flex-row items-center justify-between rounded-md bg-gray-100 p-4 shadow-md">
        <ResultsFound />
        {/* <!-- Search Boxes --> */}
        <div className="flex flex-col sm:flex-row gap-4">
          <AuthorSearch setAuthor={setAuthor} />
          <ResultsSearch />
        </div>
      </div>
    </>
  );
}
