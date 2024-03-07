import { FlatList } from "react-native";
import { CategoriesListProps } from "./types";
import ClickableRow from "@/components/molecules/ClickableRow";
import LoadingComponent from "@/components/atoms/LoadingComponent";

export default function CategoriesList({
  categories,
  isLoading,
}: CategoriesListProps) {
  return (
    <FlatList
      keyExtractor={(item, index) => `${item}_${index}`}
      showsVerticalScrollIndicator={false}
      data={categories}
      renderItem={({ item }) => <ClickableRow text={item} />}
      ListHeaderComponent={isLoading ? <LoadingComponent /> : null}
    />
  );
}
