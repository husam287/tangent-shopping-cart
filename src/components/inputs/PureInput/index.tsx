import { useState } from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { TextInput, View, TouchableOpacity } from "react-native";

import GLOBAL_STYLES from "@/constants/GlobalStyles";
import COLORS from "@/constants/Colors";
import Icon from "@/components/general/Icon";
import getShadowStyle from "@/utils/getShadowStyle";
import Text from "@/components/general/Text";
import i18n from "@/i18n";
import styles from "./styles";
import { InputFieldProps } from "./types";

export default function PureInput({
  error,
  editable = true,
  customContainerStyle,
  prefix,
  suffix = <Icon name="edit" color={COLORS.darkGrey} size={14} />,
  placeholder = i18n.t("DEFAULT_PLACEHOLDER"),
  textContentType,
  placeholderTextColor = `${COLORS.headlineDark}8A`,
  customInputColorWhenDisabled = COLORS.darkGrey,
  isTextAreaInput = false,
  customInputStyle,
  hintText,
  labelText,
  isPlaceholderDotsHidden = false,
  ...otherProps
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const hasErrors = Boolean(error);

  const ErrorSectionMarkup = (
    <View>
      {hasErrors && <Text style={styles.errorText}>{error}</Text>}
      {hintText && !hasErrors && (
        <View style={GLOBAL_STYLES.row}>
          <FontAwesome
            name="exclamation"
            size={14}
            color={COLORS.secondary}
            style={styles.spaceAround}
          />
          <Text style={styles.hintText}>{hintText}</Text>
        </View>
      )}
    </View>
  );

  const PasswordIconMarkup = textContentType === "password" && (
    <TouchableOpacity
      onPress={() => {
        setShowPassword(!showPassword);
      }}
    >
      <Ionicons
        name={showPassword ? "md-eye-outline" : "md-eye-off-outline"}
        size={24}
        color={COLORS.primary}
      />
    </TouchableOpacity>
  );

  const pointerEventValue = editable === false ? "none" : "auto";

  const inputContainerStyles = [
    styles.inputContainer,
    customContainerStyle,
    getShadowStyle(),
    hasErrors && styles.errorBorder,
    isTextAreaInput && styles.textAreaContainer,
  ];

  const inputStyles = [
    styles.input,
    customInputStyle && { ...customInputStyle },
    !editable && { color: customInputColorWhenDisabled }, // override color when disabled
    isTextAreaInput && styles.textAreaInput,
  ];

  const placeholderTextColorValue = placeholderTextColor || COLORS.grey;

  const LabelMarkup = !!labelText && (
    <View>
      <Text style={styles.labelText}>{labelText}</Text>
    </View>
  );

  return (
    <View style={styles.spaceBottom}>
      {LabelMarkup}

      <View pointerEvents={pointerEventValue} style={inputContainerStyles}>
        {!!prefix && <View style={styles.spaceEnd10}>{prefix}</View>}

        <TextInput
          placeholder={`${placeholder}${isPlaceholderDotsHidden ? "" : "..."}`}
          secureTextEntry={textContentType === "password" && !showPassword}
          placeholderTextColor={placeholderTextColorValue}
          autoCorrect={false}
          autoCapitalize="none"
          multiline={Boolean(isTextAreaInput)}
          numberOfLines={isTextAreaInput ? 5 : 1}
          style={inputStyles}
          {...otherProps}
        />

        {textContentType === "password" ? PasswordIconMarkup : suffix}
      </View>

      {ErrorSectionMarkup}
    </View>
  );
}
