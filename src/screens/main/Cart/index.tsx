import ScreenWrapper from "@/components/organisms/ScreenWrapper";
import Text from "@/components/atoms/Text";
import DebouncedSearchField from "@/components/molecules/DebouncedSearchField";
import styles from "./styles";

export default function CartScreen() {
  return (
    <ScreenWrapper>
      <Text style={styles.title}>Tab Two</Text>
      <DebouncedSearchField onSearchChange={(e) => console.log(e)} />
    </ScreenWrapper>
  );
}
