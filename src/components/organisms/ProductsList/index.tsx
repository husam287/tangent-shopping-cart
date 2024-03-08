import { FlatList } from "react-native";
import { ProductsListProps } from "./types";
import LoadingComponent from "@/components/atoms/LoadingComponent";
import ProductCard from "@/components/molecules/ProductCard";
import { moderateScale } from "@/constants/Metrics";

export default function ProductsList({
  products,
  HeaderComponent,
  isLoading,
  loadMoreData,
  isListView = false,
}: ProductsListProps) {
  return (
    <FlatList
      keyExtractor={(item) => `${item.id}`}
      data={products}
      numColumns={isListView ? 1 : 2}
      columnWrapperStyle={{ gap: moderateScale(10) }}
      contentContainerStyle={{ gap: moderateScale(10) }}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => HeaderComponent}
      renderItem={({ item }) => <ProductCard product={item} />}
      onEndReached={loadMoreData}
      ListFooterComponent={isLoading ? <LoadingComponent /> : null}
    />
  );
}
