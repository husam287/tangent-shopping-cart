import { useEffect, useState } from "react";
import { View } from "react-native";
import Chip from "@/components/molecules/Chip";
import SerachHistoryService from "@/utils/SearchHistoryService";
import styles from "./styles";
import { SearchHistorySectionProps } from "./types";

export default function SearchHistorySection({
  onSubmitSearchHandler,
}: SearchHistorySectionProps) {
  const [searchHistory, setsearchHistory] = useState([]);

  useEffect(() => {
    SerachHistoryService.getAllHistory().then((res) => {
      setsearchHistory(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      {searchHistory?.map((item) => (
        <Chip
          text={item}
          key={item}
          onPress={() => onSubmitSearchHandler?.(item)}
        />
      ))}
    </View>
  );
}
