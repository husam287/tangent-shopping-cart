import { SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import COLORS from "@/constants/Colors";
import { moderateScale } from "@/constants/Metrics";

export default function NotificationBell() {
  const onGoToNotifications = () => {
    console.log("NOTIFICATIONS");
  };

  return (
    <TouchableOpacity onPress={onGoToNotifications}>
      <SimpleLineIcons
        name="bell"
        color={COLORS.primary}
        size={moderateScale(21)}
      />
    </TouchableOpacity>
  );
}
