import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "@/constants/Metrics";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  alignStart: {
    alignItems: "flex-start",
  },
  btn: {
    marginTop: verticalScale(30),
  },
  cardSpacing: {
    margin: moderateScale(10),
  },
  container: {
    backgroundColor: COLORS.light,
    borderColor: COLORS.grey,
    borderRadius: moderateScale(16),
    borderWidth: 1,
    flex: 1,
    overflow: "hidden",
  },
  image: {
    height: verticalScale(140),
    width: "100%",
  },
  infoRow: {
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 1,
    borderTopColor: COLORS.grey,
    borderTopWidth: 1,
    marginVertical: verticalScale(3),
    paddingVertical: verticalScale(3),
    ...GLOBAL_STYLES.rowJustifyBetween,
  },
});

export default styles;
