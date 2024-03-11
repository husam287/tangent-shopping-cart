import { Animated, View } from "react-native";
import React from "react";
import DefaultCarousel from "react-native-reanimated-carousel";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import METRICS, { horizontalScale } from "@/constants/Metrics";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import COLORS from "@/constants/Colors";
import LoadingComponent from "@/components/atoms/LoadingComponent";
import { CarouselProps } from "./types";
import styles from "./styles";

const WIDTH = METRICS.screenWidth;

export default function Carousel<T>({
  data,
  renderItem,
  dotColor = COLORS.primary,
  dotBackground = COLORS.grey,
  isLoading,
  width = WIDTH - METRICS.generalSpacingValue * 2,
  height = WIDTH / 2,
  isParallelX = false,
  autoPlay = false,
  loopDisabled = false,
  dotsContainer,
}: CarouselProps<T>) {
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;

  if (!data) return null;

  const inputRange = [0, data.length];

  const outputRange = [0, data.length * WIDTH];

  const scrollX = scrollOffsetAnimatedValue.interpolate({
    inputRange,
    outputRange,
  });

  const hasLengthAndMoreThan1 = !!data?.length && data?.length > 1;

  return !isLoading ? (
    <View style={styles.spaceBottom}>
      <DefaultCarousel
        loop={!loopDisabled && hasLengthAndMoreThan1}
        width={width}
        height={height}
        autoPlay={autoPlay}
        autoPlayInterval={5000}
        data={data}
        scrollAnimationDuration={500}
        onProgressChange={(_, absoluteProgress) =>
          scrollOffsetAnimatedValue.setValue(absoluteProgress)
        }
        renderItem={renderItem}
        mode={isParallelX ? "parallax" : undefined}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 110,
        }}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
      />

      {hasLengthAndMoreThan1 && (
        <View
          style={[GLOBAL_STYLES.row, GLOBAL_STYLES.vhCentering, dotsContainer]}
        >
          <ExpandingDot
            data={data as Array<object>}
            expandingDotWidth={horizontalScale(32)}
            scrollX={scrollX as Animated.Value}
            inActiveDotOpacity={0.6}
            activeDotColor={dotColor}
            inActiveDotColor={dotBackground}
            dotStyle={styles.dotStyle}
            containerStyle={styles.dotContainer}
          />
        </View>
      )}
    </View>
  ) : (
    <View style={[GLOBAL_STYLES.fullSize, GLOBAL_STYLES.vhCentering]}>
      <LoadingComponent />
    </View>
  );
}
