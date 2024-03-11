import { View } from "react-native";
import { CarouselRenderItem } from "react-native-reanimated-carousel";
import styles from "./styles";
import Carousel from "@/components/molecules/Carousel";
import Img from "@/components/atoms/Image";
import { moderateScale, verticalScale } from "@/constants/Metrics";
import HOME_ADVERTISMENTS, { AdvertismentType } from "@/data/homeSlider";
import Text from "@/components/atoms/Text";

export default function AdvertiseSliderBanner() {
  const advertiseRenderItem: CarouselRenderItem<AdvertismentType> = ({
    item,
  }) => (
    <View style={styles.advContainer}>
      <Img source={item.image} style={styles.image} />

      <View style={styles.advInfoContainer}>
        <Text fontSize={moderateScale(14)} fontFamily="font700" color="light">
          {item.title}
        </Text>
        <Text
          fontSize={moderateScale(12)}
          fontFamily="font400"
          color="light"
          style={styles.descText}
        >
          {item.description}
        </Text>
      </View>
    </View>
  );

  return (
    <Carousel<AdvertismentType>
      data={HOME_ADVERTISMENTS}
      renderItem={advertiseRenderItem}
      autoPlay
      isParallelX
      dotsContainer={styles.dotsContainer}
      height={verticalScale(250)}
    />
  );
}
