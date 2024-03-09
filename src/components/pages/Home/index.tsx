import { useNavigation } from "@react-navigation/native";
import ScreenWrapper from "@/components/templates/ScreenWrapper";
import HomeProductSlider from "@/components/organisms/HomeProductSlider";
import { useGetProductsQuery } from "@/apis/services/product";
import Paper from "@/components/templates/Paper";
import ScrollViewWithoutBar from "@/components/templates/ScrollViewWithoutBar";
import AdvertiseSliderBanner from "@/components/organisms/AdvertiseSliderBanner";

export default function HomeScreen() {
  const navigation = useNavigation();

  const { data: featuredProducts, isFetching: isFeaturedProductsLoading } =
    useGetProductsQuery({});

  const onGoToFeaturedProduct = () => {
    navigation.navigate("Root", { screen: "ProductsScreen" });
  };

  return (
    <ScreenWrapper>
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
            products={featuredProducts?.products || []}
            listNavAction={onGoToFeaturedProduct}
            isLoading={isFeaturedProductsLoading}
          />
        </Paper>
      </ScrollViewWithoutBar>
    </ScreenWrapper>
  );
}
