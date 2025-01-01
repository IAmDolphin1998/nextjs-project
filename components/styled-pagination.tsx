import { usePagination, UsePaginationProps } from "react-instantsearch";

export default function StyledPagination(props: UsePaginationProps) {
  const {
    pages,
    currentRefinement,
    isFirstPage,
    isLastPage,
    refine,
    createURL,
  } = usePagination(props);
  const previousPageIndex = currentRefinement - 1;
  const nextPageIndex = currentRefinement + 1;

  return (
    <div className="flex items-center justify-evenly">
      {/* <!-- Left Arrow --> */}
      <PaginationItem
        isDisabled={isFirstPage}
        className="text-blue-600 hover:text-blue-800"
        href={createURL(previousPageIndex)}
        onClick={() => refine(previousPageIndex)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </PaginationItem>

      {/* <!-- Pagination Numbers --> */}
      {pages.map((page) => {
        const label = page + 1;

        return (
          <PaginationItem
            key={page}
            isDisabled={false}
            aria-label={`Page ${label}`}
            className="rounded-md border border-gray-300 px-3 py-1 text-gray-600"
            href={createURL(page)}
            onClick={() => refine(page)}
          >
            {label}
          </PaginationItem>
        );
      })}

      {/* <!-- Right Arrow --> */}
      <PaginationItem
        isDisabled={isLastPage}
        className="text-blue-600 hover:text-blue-800"
        href={createURL(nextPageIndex)}
        onClick={() => refine(nextPageIndex)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </PaginationItem>
    </div>
  );
}

type PaginationItemProps = Omit<React.ComponentProps<"a">, "onClick"> & {
  onClick: NonNullable<React.ComponentProps<"a">["onClick"]>;
  isDisabled: boolean;
};
function PaginationItem({
  href,
  onClick,
  isDisabled,
  ...props
}: PaginationItemProps) {
  if (isDisabled) {
    return <span {...props} />;
  }

  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        onClick(event);
      }}
      {...props}
    />
  );
}
