import AsyncStorage from "@react-native-async-storage/async-storage";

const MAX_HISTORY_QUEUE_SIZE = 10;

class SerachHistoryService {
  static async addNewHistory(newHistoryRecord: string) {
    const savedResults = await AsyncStorage.getItem("searchHistory");
    const searchHistoryList: string[] = savedResults
      ? JSON.parse(savedResults)
      : [];

    if (searchHistoryList?.includes(newHistoryRecord)) {
      const newSearchHistory = searchHistoryList?.filter(
        (item) => item !== newHistoryRecord
      );
      newSearchHistory.push(newHistoryRecord);
      AsyncStorage.setItem("searchHistory", JSON.stringify(newSearchHistory));
      return;
    }

    if (searchHistoryList?.length >= MAX_HISTORY_QUEUE_SIZE) {
      searchHistoryList.shift();
    }
    searchHistoryList.push(newHistoryRecord);
    const reversedSearchHistory = searchHistoryList.reverse();
    const uniqueSearchHistory = new Set([...reversedSearchHistory]);
    const finalResutlSearchHisotry = [...uniqueSearchHistory].reverse();
    AsyncStorage.setItem(
      "searchHistory",
      JSON.stringify(finalResutlSearchHisotry)
    );
  }

  static async getAllHistory() {
    const savedResults = await AsyncStorage.getItem("searchHistory");
    const searchHistoryList = savedResults ? JSON.parse(savedResults) : [];
    return searchHistoryList.reverse();
  }

  static clearHistory() {
    AsyncStorage.removeItem("searchHistory");
  }
}

export default SerachHistoryService;
