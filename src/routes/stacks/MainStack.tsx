import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import BottomTabNavigator from "../BottomTabNavigator";
// Start of screen
import ProductDetails from "@/components/pages/ProductDetails";
import Payment from "@/components/pages/Payment";
import CategoryProducts from "@/components/pages/CategoryProducts";
import Search from "@/components/pages/Search";
// End of screen
import { MainStackParamList } from "../types";
import MainScreenOptions from "../MainScreenOptions";

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={MainScreenOptions as NativeStackNavigationOptions}
    >
      {/* MAIN SCREENS */}
      <Stack.Group>
        <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          initialParams={{ title: "Product Details" }}
        />
      </Stack.Group>

      {/* PRODUCT SCREENS */}
      <Stack.Group>
        <Stack.Screen
          name="ProductDetailsModal"
          component={ProductDetails}
          initialParams={{
            title: "Product Details Modal",
            isPopupHeader: true,
          }}
        />
      </Stack.Group>

      <Stack.Screen
        name="Payment"
        component={Payment}
        initialParams={{
          title: "Payment",
        }}
      />

      <Stack.Screen
        name="CategoryProducts"
        component={CategoryProducts}
        initialParams={{
          title: "CategoryProducts",
        }}
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          animation: "slide_from_bottom",
        }}
        initialParams={{
          title: "Search",
          isPopupHeader: true,
        }}
      />
    </Stack.Navigator>
  );
}
