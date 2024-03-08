import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Text from "@/components/atoms/Text";
import { CartItemProps } from "./types";
import styles from "./styles";
import Img from "@/components/atoms/Image";
import { moderateScale } from "@/constants/Metrics";
import QtyCounter from "../QtyCounter";
import Button from "@/components/atoms/Button";
import COLORS from "@/constants/Colors";

export default function CartItem({
  product,
  quantity = 1,
  minValue = 1,
  deleteItemFromCart,
  onQtyChange,
}: CartItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.cartInnerContainer}>
        <Img source={product.thumbnail} style={styles.image} />

        <View>
          <Text
            fontSize={moderateScale(18)}
            fontFamily="font700"
            color="primary"
          >
            {product.title}
          </Text>
          <Text fontSize={moderateScale(14)} fontFamily="font300" color="dark">
            {product.category}
          </Text>

          <QtyCounter
            initValue={quantity}
            minValue={minValue}
            onCounterChange={onQtyChange}
            onReachedToMinValue={deleteItemFromCart}
          />
        </View>
      </View>

      {!!deleteItemFromCart && (
        <View>
          <Button
            prefix={
              <MaterialIcons
                name="delete-outline"
                size={moderateScale(21)}
                color={COLORS.light}
              />
            }
            backgroundColor={COLORS.danger}
            onPress={deleteItemFromCart}
          />
        </View>
      )}
    </View>
  );
}
