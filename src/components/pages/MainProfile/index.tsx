import ScreenWrapper from "@/components/templates/ScreenWrapper";
import Text from "@/components/atoms/Text";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import LanguageSection from "./LanguageSection";

export default function MainProfileScreen() {
  const { t } = useAutoCompleteTranslation();

  return (
    <ScreenWrapper>
      <Text>{t("HOME")}</Text>

      <LanguageSection />
    </ScreenWrapper>
  );
}
