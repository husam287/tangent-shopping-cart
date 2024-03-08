import Text from "@/components/atoms/Text";
import { CartAddationBottomSheetProps } from "./types";
import BottomSheet from "../BottomSheet";
import Button from "@/components/atoms/Button";
import toCurrency from "@/utils/toCurrency";

export default function CartAddationBottomSheet({
  isVisible,
  setVisible,
  product,
}: CartAddationBottomSheetProps) {
  const onAddToCart = () => {
    console.log(product);
  };

  if (!product) return null;

  return (
    <BottomSheet
      isVisible={isVisible}
      setVisible={setVisible}
      draggable
      isCloseButtonHidden
    >
      <Text>CartAddationBottomSheet</Text>

      <Button
        title={`ADD (${toCurrency(13 * product.price)})`}
        onPress={onAddToCart}
      />
    </BottomSheet>
  );
}
