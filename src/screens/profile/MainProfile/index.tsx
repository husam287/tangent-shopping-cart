import ScreenWrapper from "@/components/general/ScreenWrapper";
import Text from "@/components/general/Text";
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
