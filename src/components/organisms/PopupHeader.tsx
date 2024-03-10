import { SimpleLineIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { useNavigation } from "@react-navigation/native";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import Colors from "@/constants/Colors";
import Text from "@/components/atoms/Text";
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
    ...GLOBAL_STYLES.font500,
  },
  spacing: {
    marginEnd: -horizontalScale(15),
    padding: horizontalScale(15),
  },
});

export default function PopupHeader({ title = "" }) {
  const navigation = useNavigation();

  const CloseButtonMarkup = (
    <SimpleLineIcons
      name="close"
      size={moderateScale(18)}
      color={Colors.dark}
    />
  );

  return (
    <View style={styles.headerStyle}>
      {/* CENTER COMPONENT */}
      {!!title && (
        <View>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      )}

      {/* CLOSE BUTTON */}
      <TouchableOpacity style={styles.spacing} onPress={navigation.goBack}>
        {CloseButtonMarkup}
      </TouchableOpacity>
    </View>
  );
}
