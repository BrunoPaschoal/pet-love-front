import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AppNavigationTypes = NativeStackNavigationProp<AppStackParamList>;

export type AppStackParamList = {
  AppTabs: NavigatorScreenParams<AppTabParamList>;
};

export type AppTabParamList = {
  Home: undefined;
  Adopt: undefined;
  Ongs: undefined;
  Favorites: undefined;
  Menu: undefined;
};
