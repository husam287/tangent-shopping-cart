import { useEffect, useState } from "react";
import { View } from "react-native";
import { CartAddationBottomSheetProps } from "./types";
import BottomSheet from "../BottomSheet";
import Button from "@/components/atoms/Button";
import toCurrency from "@/utils/toCurrency";
import CartItem from "@/components/molecules/CartItem";
import styles from "./styles";

export default function CartAddationBottomSheet({
  isVisible,
  setVisible,
  product,
}: CartAddationBottomSheetProps) {
  const [qty, setqty] = useState(1);

  const onAddToCart = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (!isVisible) {
      setqty(1);
    }
  }, [isVisible]);

  if (!product) return null;

  return (
    <BottomSheet
      isVisible={isVisible}
      setVisible={setVisible}
      draggable
      isCloseButtonHidden
    >
      <View style={styles.spaceBottom}>
        <CartItem
          product={product}
          quantity={qty}
          minValue={1}
          onQtyChange={setqty}
        />
      </View>

      <Button
        title={`ADD (${toCurrency(13 * product.price)})`}
        onPress={onAddToCart}
      />
    </BottomSheet>
  );
}
