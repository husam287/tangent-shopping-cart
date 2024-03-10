import { StyleSheet } from "react-native";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import { moderateScale } from "@/constants/Metrics";

const styles = StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.row,
    flexWrap: "wrap",
    gap: moderateScale(5),
  },
});

export default styles;
