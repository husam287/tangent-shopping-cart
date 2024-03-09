import { FlatList } from "react-native";
import { useMemo } from "react";
import { debounce } from "lodash-es";
import ScreenWrapper from "@/components/templates/ScreenWrapper";
import CartItem from "@/components/molecules/CartItem";
import { Product } from "@/apis/@types/product";
import { verticalScale } from "@/constants/Metrics";
import EmptyComponent from "@/components/atoms/EmptyComponent";
import useCart from "@/hooks/useCart";
import LoadingComponent from "@/components/atoms/LoadingComponent";
import showSuccessMsg from "@/utils/showSuccessMsg";
import Button from "@/components/atoms/Button";
import toCurrency from "@/utils/toCurrency";

export default function CartScreen() {
  const { cart, isCartLoading, removeFromCart, editCartItemQuantity } =
    useCart();

  const onDeleteItem = (product: Product) => {
    removeFromCart(product.id);
    showSuccessMsg({ msg: `${product.title} has been removed successfully!` });
  };

  const onEditCartItemQty = (product: Product, newQty: number) => {
    editCartItemQuantity(product.id, newQty);
  };

  const debouncedEditCartHandler = useMemo(
    () => debounce(onEditCartItemQty, 300),
    []
  );

  const getTotalPrice = () => {
    const totalPrice = cart.reduce(
      (sum, item) => item.product.price * item.quantity + sum,
      0
    );

    return toCurrency(totalPrice);
  };

  const onGoToCheckout = () => {
    // TODO
  };

  const CheckoutButtonMarkup = (
    <Button
      title={`Checkout (${getTotalPrice()})`}
      onPress={onGoToCheckout}
      btnHeight={58}
    />
  );

  return (
    <ScreenWrapper>
      <FlatList
        data={cart}
        keyExtractor={(item) => `${item.product.id}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: verticalScale(30) }}
        ListEmptyComponent={
          !isCartLoading ? <EmptyComponent i18nKey="EMPTY_CART" /> : null
        }
        ListHeaderComponent={isCartLoading ? <LoadingComponent /> : null}
        ListFooterComponent={cart?.length ? CheckoutButtonMarkup : null}
        renderItem={({ item }) => (
          <CartItem
            deleteItemFromCart={() => onDeleteItem(item.product)}
            product={item.product}
            quantity={item.quantity}
            minValue={0}
            onQtyChange={(e) => debouncedEditCartHandler(item.product, e)}
          />
        )}
      />
    </ScreenWrapper>
  );
}
