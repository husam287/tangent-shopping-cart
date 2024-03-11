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
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import toCurrency from "@/utils/toCurrency";
import Paper from "@/components/templates/Paper";

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

        <View style={GLOBAL_STYLES.fullSize}>
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

          <Text
            fontSize={moderateScale(16)}
            fontFamily="font700"
            color="primary"
          >{`${quantity} x ${toCurrency(product.price)}`}</Text>

          <Paper bottomSpace={undefined} topSpace="md">
            <QtyCounter
              initValue={quantity}
              minValue={minValue}
              onCounterChange={onQtyChange}
              onReachedToMinValue={deleteItemFromCart}
            />
          </Paper>
        </View>
      </View>

      {!!deleteItemFromCart && (
        <View>
          <Button
            prefix={
              <MaterialIcons
                name="delete-outline"
                size={moderateScale(14)}
                color={COLORS.light}
              />
            }
            backgroundColor={COLORS.danger}
            onPress={deleteItemFromCart}
            btnHeight={42}
          />
        </View>
      )}
    </View>
  );
}
