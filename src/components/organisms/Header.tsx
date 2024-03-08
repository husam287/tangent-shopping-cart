import { SimpleLineIcons } from "@expo/vector-icons";
import { I18nManager, StyleSheet, TouchableOpacity, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { useNavigation } from "@react-navigation/native";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import Colors from "@/constants/Colors";
import Text from "@/components/atoms/Text";
import NotificationBell from "@/components/molecules/NotificationBell";
import { horizontalScale, moderateScale } from "@/constants/Metrics";

const styles = StyleSheet.create({
  headerStyle: {
    alignItems: "center",
    backgroundColor: Colors.light,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: horizontalScale(15),
    paddingTop: getStatusBarHeight(),
  },
  headerTitle: {
    color: Colors.primary,
    fontSize: moderateScale(18),
    textTransform: "capitalize",
    ...GLOBAL_STYLES.font500,
  },
  hiddenStyle: { opacity: 0 },
  spacing: {
    marginStart: -horizontalScale(15),
    padding: moderateScale(15),
  },
});

export default function NavigationHeader({
  title = "",
  hasBackArrow = true,
  hasLogo = false,
  isRightComponentHidden = false,
}) {
  const navigation = useNavigation();

  const BackButtonMarkup = (
    <SimpleLineIcons
      name={I18nManager.isRTL ? "arrow-right" : "arrow-left"}
      size={moderateScale(18)}
      color={Colors.dark}
    />
  );

  const isBackButtonVisible = hasBackArrow && navigation.canGoBack();

  return (
    <View style={styles.headerStyle}>
      {/* BACK BUTTON */}
      <TouchableOpacity
        disabled={!isBackButtonVisible}
        style={[styles.spacing, !isBackButtonVisible && styles.hiddenStyle]}
        onPress={navigation.goBack}
      >
        {BackButtonMarkup}
      </TouchableOpacity>

      {/* CENTER COMPONENT */}
      <View>
        {!!title && (
          <View>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>
        )}
        {!!hasLogo && (
          <View>
            <Text>LOGO</Text>
          </View>
        )}
      </View>

      {/* RIGHT COMPONENT */}
      <View
        pointerEvents={isRightComponentHidden ? "none" : undefined}
        style={isRightComponentHidden && styles.hiddenStyle}
      >
        <NotificationBell />
      </View>
    </View>
  );
}
