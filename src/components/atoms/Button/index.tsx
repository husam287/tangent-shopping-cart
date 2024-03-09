import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import GLOBAL_STYLES from "@/constants/GlobalStyles";
import COLORS from "@/constants/Colors";
import { ButtonProps } from "./types";
import Text from "@/components/atoms/Text";
import Icon from "@/components/atoms/Icon";
import styles from "./styles";
import { moderateScale, verticalScale } from "@/constants/Metrics";

export default function Button({
  title,
  i18nKey,
  onPress,
  color = COLORS.light,
  backgroundColor = COLORS.primary,
  borderColor,
  disabled = false,
  btnHeight = verticalScale(48),
  buttonCustomStyle,
  textCustomStyle,
  fontSize = moderateScale(14),
  iconSize = moderateScale(16),
  prefix,
  IconName,
  isLoading,
  suffix,
  isFullWidth = false,
}: ButtonProps) {
  const customStyle: ViewStyle = {
    backgroundColor: disabled ? COLORS.grey : backgroundColor,
    borderColor,
    borderWidth: borderColor ? 1 : 0,
    height: btnHeight,
    flex: isFullWidth ? 1 : undefined,
    ...buttonCustomStyle,
  };

  const textExtraStyle = { color, fontSize };

  const hasTitle = !!title || !!i18nKey;

  return (
    <TouchableOpacity
      style={[styles.button, customStyle]}
      disabled={disabled || isLoading}
      activeOpacity={disabled ? 1 : 0.2}
      onPress={onPress}
    >
      {!isLoading ? (
        <View style={GLOBAL_STYLES.row}>
          {prefix && (
            <View style={hasTitle && styles.prefixSpacing}>{prefix}</View>
          )}

          {!!IconName && (
            <Icon
              name={IconName}
              size={iconSize}
              color={color}
              style={styles.smallSpaceEnd}
            />
          )}

          {hasTitle && (
            <Text
              style={[styles.text, textExtraStyle, textCustomStyle]}
              i18nKey={i18nKey}
            >
              {title}
            </Text>
          )}

          {suffix && <View style={styles.suffixSpacing}>{suffix}</View>}
        </View>
      ) : (
        <ActivityIndicator color={color} size={moderateScale(24)} />
      )}
    </TouchableOpacity>
  );
}
