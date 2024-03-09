import { Text, View, ViewStyle } from "react-native";
import { horizontalScale, moderateScale } from "@/constants/Metrics";
import { NavigationTabProps } from "./types";
import styles from "./styles";

const SPACE_BETWEEN = horizontalScale(5);

export default function NavigationTab({
  focused,
  title,
  tabWidth,
  iconComponent,
}: NavigationTabProps) {
  const containerStyle: ViewStyle = {
    ...styles.container,
    marginHorizontal: SPACE_BETWEEN,
    width: tabWidth - SPACE_BETWEEN * 2,
  };

  const focusContainer: ViewStyle = {
    backgroundColor: focused ? "#D1D5DB" : "transpparent",
    borderRadius: moderateScale(16),
  };

  return (
    <View style={[containerStyle, focusContainer]}>
      {iconComponent}
      <Text style={styles.text} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
}
