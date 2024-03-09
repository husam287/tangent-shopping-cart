import { useEffect, useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BottomSheet from "../BottomSheet";
import Button from "@/components/atoms/Button";
import toCurrency from "@/utils/toCurrency";
import CartItem from "@/components/molecules/CartItem";
import styles from "./styles";
import useCart from "@/hooks/useCart";
import showSuccessMsg from "@/utils/showSuccessMsg";
import { RootState } from "@/redux";
import { closeCartBottomSheet } from "@/redux/cartBottomSheetReducer";

export default function CartAddationBottomSheet() {
  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state: RootState) => state.cartBottomSheet.selectedProduct
  );

  const [qty, setqty] = useState(1);
  const { addToCart } = useCart();

  const dismissSheet = () => {
    dispatch(closeCartBottomSheet());
  };

  const onAddToCart = () => {
    if (!selectedProduct) return;
    addToCart({ product: selectedProduct, quantity: qty });
    showSuccessMsg({ msg: `${selectedProduct.title} has been added to cart!` });
    dismissSheet();
  };

  useEffect(() => {
    if (!selectedProduct) {
      setqty(1);
    }
  }, [selectedProduct]);

  if (!selectedProduct) return null;

  return (
    <BottomSheet
      isVisible={!!selectedProduct}
      setVisible={dismissSheet}
      draggable
      isCloseButtonHidden
    >
      <View style={styles.spaceBottom}>
        <CartItem
          product={selectedProduct}
          quantity={qty}
          minValue={1}
          onQtyChange={setqty}
        />
      </View>

      <Button
        title={`ADD (${toCurrency(qty * selectedProduct.price)})`}
        onPress={onAddToCart}
      />
    </BottomSheet>
  );
}
