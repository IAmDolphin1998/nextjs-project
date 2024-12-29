import HorizontalCard from "./horizontal-card";
import { Document } from "@/types/document.types";
import { useHits, UseHitsProps } from "react-instantsearch";

export default function ListingCards(props: UseHitsProps<Document>) {
  const { items } = useHits(props);

  return (
    <div className="flex flex-col gap-6">
      {items.map((hit, index) => (
        <HorizontalCard key={index} hit={hit} />
      ))}
    </div>
  );
}
