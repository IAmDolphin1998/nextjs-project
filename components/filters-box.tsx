import { useRefinementList, UseRefinementListProps } from "react-instantsearch";

export default function FiltersBox(props: UseRefinementListProps) {
  const {
    items,
    hasExhaustiveItems,
    createURL,
    refine,
    sendEvent,
    searchForItems,
    isFromSearch,
    canRefine,
    canToggleShowMore,
    isShowingMore,
    toggleShowMore,
  } = useRefinementList(props);

  return (
    <ul className="space-y-3">
      {/* <!-- Item --> */}
      {items.map((item, index) => (
        <li key={index} className="flex items-center justify-between">
          <label className="flex items-center text-gray-800">
            <input
              type="checkbox"
              className="mr-3 rounded border-gray-300"
              checked={item.isRefined}
              onChange={() => refine(item.value)}
            />
            {item.label}
          </label>
          <span className="text-sm text-gray-500">{item.count}</span>
        </li>
      ))}
    </ul>
  );
}
