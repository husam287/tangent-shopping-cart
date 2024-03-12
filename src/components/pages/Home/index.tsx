import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import ScreenWrapper from "@/components/templates/ScreenWrapper";
import HomeProductSlider from "@/components/organisms/HomeProductSlider";
import { useGetProductsQuery } from "@/apis/services/product";
import Paper from "@/components/templates/Paper";
import ScrollViewWithoutBar from "@/components/templates/ScrollViewWithoutBar";
import AdvertiseSliderBanner from "@/components/organisms/AdvertiseSliderBanner";
import useWishlistProducts from "@/hooks/useWishlistProducts";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

export default function HomeScreen() {
  const navigation = useNavigation();

  const { data: featuredProducts, isFetching: isFeaturedProductsLoading } =
    useGetProductsQuery({});

  const { wishlistProducts } = useWishlistProducts();

  const onGoToFeaturedProduct = () => {
    navigation.navigate("Root", { screen: "ProductsScreen" });
  };

  const onGoToWishlist = () => {
    navigation.navigate("Root", { screen: "WishlistScreen" });
  };

  return (
    <ScreenWrapper>
      <GestureHandlerRootView style={GLOBAL_STYLES.fullSize}>
        <ScrollViewWithoutBar>
          <Paper>
            <AdvertiseSliderBanner />
          </Paper>

          <Paper>
            <HomeProductSlider
              listTitle="Featured Products"
              products={featuredProducts?.products || []}
              listNavAction={onGoToFeaturedProduct}
              isLoading={isFeaturedProductsLoading}
            />
          </Paper>

          <Paper>
            <HomeProductSlider
              listTitle="Liked Products"
              products={wishlistProducts || []}
              listNavAction={onGoToWishlist}
              isLoading={isFeaturedProductsLoading}
            />
          </Paper>
        </ScrollViewWithoutBar>
      </GestureHandlerRootView>
    </ScreenWrapper>
  );
}
