import { useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import ScreenWrapper from "@/components/templates/ScreenWrapper";
import DebouncedSearchField from "@/components/molecules/DebouncedSearchField";
import { MainStackParamList } from "@/routes/types";
import ScrollViewWithoutBar from "@/components/templates/ScrollViewWithoutBar";
import Paper from "@/components/templates/Paper";
import SearchHistorySection from "@/components/organisms/SearchHistorySection";
import SearchSuggestSection from "@/components/organisms/SearchSuggestSection";
import SerachHistoryService from "@/utils/SearchHistoryService";

export default function SearchScreen() {
  const navigation = useNavigation();

  const search =
    useRoute<RouteProp<MainStackParamList, "Search">>()?.params?.search;

  const [searchValue, setsearchValue] = useState(search || "");

  const onSubmitSearchHandler = (e?: string) => {
    if (!e) return;
    SerachHistoryService.addNewHistory(e);
    navigation.navigate("Root", {
      screen: "ProductsScreen",
      params: { search: e },
    });
  };

  return (
    <ScreenWrapper>
      <ScrollViewWithoutBar>
        <DebouncedSearchField
          defaultValue={search}
          onSubmit={() => onSubmitSearchHandler(searchValue)}
          withCloseButton
          onSearchChange={(e) => setsearchValue(e || "")}
        />

        <Paper topSpace="sm">
          <SearchSuggestSection
            searchValue={searchValue}
            onSubmitSearchHandler={onSubmitSearchHandler}
          />
        </Paper>

        <Paper>
          <SearchHistorySection onSubmitSearchHandler={onSubmitSearchHandler} />
        </Paper>
      </ScrollViewWithoutBar>
    </ScreenWrapper>
  );
}
