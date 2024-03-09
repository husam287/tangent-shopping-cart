import { View } from "react-native";
import { useDispatch } from "react-redux";
import Text from "@/components/atoms/Text";
import { ProductCardProps } from "./types";
import styles from "./styles";
import Img from "@/components/atoms/Image";
import toCurrency from "@/utils/toCurrency";
import { moderateScale } from "@/constants/Metrics";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import Button from "@/components/atoms/Button";
import { openCartBottomSheet } from "@/redux/cartBottomSheetReducer";

export default function ProductCard({
  product,
  containerStyle,
}: ProductCardProps) {
  const dispatch = useDispatch();

  const onClickAddToCart = () => {
    dispatch(openCartBottomSheet(product));
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Img source={product.thumbnail} style={styles.image} />

      <View style={styles.cardSpacing}>
        <View style={styles.productHeader}>
          <View style={GLOBAL_STYLES.fullSize}>
            <Text
              fontSize={moderateScale(18)}
              fontFamily="font700"
              color="primary"
              numberOfLines={1}
            >
              {product.title}
            </Text>
            <Text
              fontSize={moderateScale(14)}
              fontFamily="font300"
              color="dark"
            >
              {product.category}
            </Text>
          </View>

          <View>
            <Text
              fontSize={moderateScale(18)}
              fontFamily="font700"
              color="primary"
            >
              {toCurrency(product.price)}
            </Text>
          </View>
        </View>

        <Button
          onPress={onClickAddToCart}
          title="ADD TO CART"
          buttonCustomStyle={styles.btn}
        />
      </View>
    </View>
  );
}
