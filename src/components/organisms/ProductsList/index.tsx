import { ListRenderItem } from "react-native";
import { ProductsListProps } from "./types";
import ProductCard from "@/components/molecules/ProductCard";
import { moderateScale } from "@/constants/Metrics";
import List from "@/components/molecules/List";
import { Product } from "@/apis/@types/product";

export default function ProductsList({
  products,
  HeaderComponent,
  isLoading,
  loadMoreData,
  isListView = false,
}: ProductsListProps) {
  const productRenderItem: ListRenderItem<Product> = ({ item }) => (
    <ProductCard product={item} />
  );

  return (
    <List
      keyExtractor={(item) => `${item.id}`}
      data={products}
      key={isListView ? "list" : "grid"}
      numColumns={isListView ? 1 : 2}
      columnGap={moderateScale(10)}
      rowGap={moderateScale(10)}
      ListHeaderComponent={() => HeaderComponent}
      renderItem={productRenderItem}
      onEndReached={loadMoreData}
      isLoading={isLoading}
    />
  );
}
