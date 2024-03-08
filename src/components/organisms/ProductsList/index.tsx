import { FlatList } from "react-native";
import { useState } from "react";
import { ProductsListProps } from "./types";
import LoadingComponent from "@/components/atoms/LoadingComponent";
import ProductCard from "@/components/molecules/ProductCard";
import { moderateScale } from "@/constants/Metrics";
import { Product } from "@/apis/@types/product";
import CartAddationBottomSheet from "../CartAddationBottomSheet";

export default function ProductsList({
  products,
  HeaderComponent,
  isLoading,
  loadMoreData,
  isListView = false,
}: ProductsListProps) {
  const [isAddationToCartSheetVisible, setisAddationToCartSheetVisible] =
    useState(false);

  const [selectedProduct, setselectedProduct] = useState<Product>();

  const onAddProductToCart = (product: Product) => {
    setisAddationToCartSheetVisible(true);
    setselectedProduct(product);
  };

  return (
    <>
      <FlatList
        keyExtractor={(item) => `${item.id}`}
        data={products}
        key={isListView ? "list" : "grid"}
        numColumns={isListView ? 1 : 2}
        columnWrapperStyle={!isListView && { gap: moderateScale(10) }}
        contentContainerStyle={{ gap: moderateScale(10) }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => HeaderComponent}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onClickAddToCart={() => onAddProductToCart(item)}
          />
        )}
        onEndReached={loadMoreData}
        ListFooterComponent={isLoading ? <LoadingComponent /> : null}
      />

      <CartAddationBottomSheet
        isVisible={isAddationToCartSheetVisible}
        setVisible={() => setisAddationToCartSheetVisible(false)}
        product={selectedProduct}
      />
    </>
  );
}
