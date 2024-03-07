import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import i18n from "@/i18n";
import Button from "@/components/general/Button";
import ScrollViewWithoutBar from "@/components/general/ScrollViewWithoutBar";
import styles from "./styles";
import getShadowStyle from "@/utils/getShadowStyle";

export default function Welcome() {
  const navigation = useNavigation();

  const onClickLoginButton = () => {
    navigation.navigate("Login");
  };

  return (
    <ScreenWrapper isHeaderHidden hasNoHorizontalSpacing>
      <ScrollViewWithoutBar>
        {/* BUTTONS GROUPS */}
        <View style={[getShadowStyle(), styles.buttonsBox]}>
          <Button
            onPress={onClickLoginButton}
            title={i18n.t("LOGIN")}
            IconName="login"
          />
        </View>
      </ScrollViewWithoutBar>
    </ScreenWrapper>
  );
}
