import { ProductSuggestionListProps } from "./types";
import LoadingComponent from "@/components/atoms/LoadingComponent";
import SearchItemRow from "../SearchItemRow";

export default function ProductSuggestionList({
  suggestions,
  isLoading = false,
  onSubmitSearch,
}: ProductSuggestionListProps) {
  const ListMarkup = suggestions?.map((item) => (
    <SearchItemRow
      title={item.title || ""}
      key={item.id}
      onPress={() => onSubmitSearch?.(item.title as string)}
    />
  ));

  return !isLoading ? ListMarkup : <LoadingComponent />;
}
