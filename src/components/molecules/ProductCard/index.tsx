import { TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { useMemo } from "react";
import Text from "@/components/atoms/Text";
import { ProductCardProps } from "./types";
import styles from "./styles";
import Img from "@/components/atoms/Image";
import toCurrency from "@/utils/toCurrency";
import { moderateScale } from "@/constants/Metrics";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import Button from "@/components/atoms/Button";
import { openCartBottomSheet } from "@/redux/cartBottomSheetReducer";
import useWishlistProducts from "@/hooks/useWishlistProducts";
import COLORS from "@/constants/Colors";

export default function ProductCard({
  product,
  containerStyle,
}: ProductCardProps) {
  const dispatch = useDispatch();

  const { isWishlistedProduct, addToWishlist, removeFromWishlist } =
    useWishlistProducts();

  const isWishlisted = isWishlistedProduct(product.id);

  const onClickAddToCart = () => {
    dispatch(openCartBottomSheet(product));
  };

  const onToggleWishlistHandler = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const MemorizedCard = useMemo(
    () => (
      <View style={[styles.container, containerStyle]}>
        <Img source={product.thumbnail} style={styles.image} />

        <TouchableOpacity
          style={styles.wishlistIconContainer}
          onPress={onToggleWishlistHandler}
        >
          <MaterialIcons
            name="favorite"
            size={moderateScale(24)}
            color={isWishlisted ? COLORS.danger : COLORS.light}
          />
        </TouchableOpacity>

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
    ),
    [isWishlisted]
  );

  return MemorizedCard;
}
