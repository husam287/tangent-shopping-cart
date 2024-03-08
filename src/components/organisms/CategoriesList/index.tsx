import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CategoriesListProps } from "./types";
import ClickableRow from "@/components/molecules/ClickableRow";
import LoadingComponent from "@/components/atoms/LoadingComponent";

export default function CategoriesList({
  categories,
  isLoading,
}: CategoriesListProps) {
  const navigation = useNavigation();

  const onClickCategory = (category: string) => {
    navigation.navigate("CategoryProducts", { category });
  };

  return (
    <FlatList
      keyExtractor={(item, index) => `${item}_${index}`}
      showsVerticalScrollIndicator={false}
      data={categories}
      renderItem={({ item }) => (
        <ClickableRow text={item} onClick={() => onClickCategory(item)} />
      )}
      ListHeaderComponent={isLoading ? <LoadingComponent /> : null}
    />
  );
}
