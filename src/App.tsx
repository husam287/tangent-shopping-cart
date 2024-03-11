import { Provider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useCachedResources from "@/hooks/useCachedResources";
import Route from "@/routes";
import store from "@/redux";
import GLOBAL_STYLES from "./constants/GlobalStyles";

export default function App() {
  const isLoadingComplete = useCachedResources();

  return (
    isLoadingComplete && (
      <GestureHandlerRootView style={GLOBAL_STYLES.fullSize}>
        <Provider store={store}>
          <Route />
        </Provider>
      </GestureHandlerRootView>
    )
  );
}
