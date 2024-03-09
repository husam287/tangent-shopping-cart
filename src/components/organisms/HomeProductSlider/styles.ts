import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "@/constants/Metrics";

const styles = StyleSheet.create({
  container: {
    gap: verticalScale(5),
  },
  listContainer: {
    minHeight: verticalScale(250),
  },
  productContainer: { width: horizontalScale(250) },
});

export default styles;
