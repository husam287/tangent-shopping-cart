import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import METRICS, { moderateScale } from "@/constants/Metrics";
import COLORS from "@/constants/Colors";
import HomeScreen from "@/components/pages/Home";
import CategoriesScreen from "@/components/pages/Categories";
import OfferScreen from "@/components/pages/Offers";
import CartScreen from "@/components/pages/Cart";
import MainProfileScreen from "@/components/pages/MainProfile";
import { NavigationTabProps } from "@/components/molecules/Tab/types";
import { TabParamList } from "./types";
import MainScreenOptions from "./MainScreenOptions";
import NavigationTab from "@/components/molecules/Tab";

const TABWIDTH = METRICS.screenWidth / 5;

function HomeTabBarElement({ focused }: Partial<NavigationTabProps>) {
  return (
    <NavigationTab
      title="HOME"
      iconComponent={
        <AntDesign
          name="home"
          size={moderateScale(24)}
          color={COLORS.primary}
        />
      }
      focused={Boolean(focused)}
      tabWidth={TABWIDTH}
    />
  );
}

function CategoryTabBarElement({ focused }: Partial<NavigationTabProps>) {
  return (
    <NavigationTab
      title="CATEGORIES"
      iconComponent={
        <Ionicons
          name="grid-outline"
          size={moderateScale(24)}
          color={COLORS.primary}
        />
      }
      focused={Boolean(focused)}
      tabWidth={TABWIDTH}
    />
  );
}

function OfferTabBarElement({ focused }: Partial<NavigationTabProps>) {
  return (
    <NavigationTab
      title="PRODUCTS"
      iconComponent={
        <Entypo name="shop" size={moderateScale(24)} color={COLORS.primary} />
      }
      focused={Boolean(focused)}
      tabWidth={TABWIDTH}
    />
  );
}

function CartTabBarElement({ focused }: Partial<NavigationTabProps>) {
  return (
    <NavigationTab
      title="CART"
      iconComponent={
        <MaterialCommunityIcons
          name="cart-outline"
          size={moderateScale(24)}
          color={COLORS.primary}
        />
      }
      focused={Boolean(focused)}
      tabWidth={TABWIDTH}
    />
  );
}

function ProfileTabBarElement({ focused }: Partial<NavigationTabProps>) {
  return (
    <NavigationTab
      title="WISHLIST"
      iconComponent={
        <MaterialIcons
          name="favorite-outline"
          size={moderateScale(24)}
          color={COLORS.primary}
        />
      }
      focused={Boolean(focused)}
      tabWidth={TABWIDTH}
    />
  );
}

const Tabs = createBottomTabNavigator<TabParamList>();

export default function BottomTabNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={MainScreenOptions as BottomTabNavigationOptions}
    >
      <Tabs.Screen
        name="HomeScreen"
        initialParams={{ title: "Home" }}
        options={{
          tabBarIcon: HomeTabBarElement,
        }}
        component={HomeScreen}
      />

      <Tabs.Screen
        name="CategoriesScreen"
        initialParams={{ title: "Categories" }}
        options={{
          tabBarIcon: CategoryTabBarElement,
        }}
        component={CategoriesScreen}
      />

      <Tabs.Screen
        name="OfferScreen"
        initialParams={{ title: "Offers" }}
        options={{
          tabBarIcon: OfferTabBarElement,
        }}
        component={OfferScreen}
      />

      <Tabs.Screen
        name="CartScreen"
        initialParams={{ title: "Cart" }}
        options={{
          tabBarIcon: CartTabBarElement,
        }}
        component={CartScreen}
      />

      <Tabs.Screen
        name="MainProfileScreen"
        initialParams={{ title: "Profile" }}
        options={{
          tabBarIcon: ProfileTabBarElement,
        }}
        component={MainProfileScreen}
      />
    </Tabs.Navigator>
  );
}
