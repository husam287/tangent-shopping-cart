import { FlatList } from "react-native";
import { useEffect, useMemo } from "react";
import { debounce } from "lodash-es";
import ScreenWrapper from "@/components/templates/ScreenWrapper";
import CartItem from "@/components/molecules/CartItem";
import { Product } from "@/apis/@types/product";
import { useLazyGetProductsQuery } from "@/apis/services/product";
import { verticalScale } from "@/constants/Metrics";
import EmptyComponent from "@/components/atoms/EmptyComponent";

export default function CartScreen() {
  const onDeleteItem = (product: Product) => {
    console.log(product);
  };

  const onEditCartItemQty = (product: Product, newQty: number) => {
    console.log(product, newQty);
  };

  const debouncedEditCartHandler = useMemo(
    () => debounce(onEditCartItemQty, 300),
    []
  );

  const [trigger, { data }] = useLazyGetProductsQuery();

  useEffect(() => {
    trigger({});
  }, []);

  return (
    <ScreenWrapper>
      <FlatList
        data={data?.products}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: verticalScale(30) }}
        ListEmptyComponent={<EmptyComponent i18nKey="EMPTY_CART" />}
        renderItem={({ item }) => (
          <CartItem
            deleteItemFromCart={() => onDeleteItem(item)}
            product={item}
            quantity={4}
            minValue={0}
            onQtyChange={(e) => debouncedEditCartHandler(item, e)}
          />
        )}
      />
    </ScreenWrapper>
  );
}
