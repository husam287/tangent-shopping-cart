import { ViewStyle } from "react-native";
import { CarouselRenderItem } from "react-native-reanimated-carousel/lib/typescript/types";

export interface CarouselProps<T> {
  data: T[];
  renderItem: CarouselRenderItem<T>;
  dotColor?: string;
  dotBackground?: string;
  isLoading?: boolean;
  width?: number;
  height?: number;
  isParallelX?: boolean;
  autoPlay?: boolean;
  loopDisabled?: boolean;
  dotsContainer?: ViewStyle;
}
