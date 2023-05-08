import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PetType } from "../../types/UserGlobalTypes";

export type AppNavigationTypes = NativeStackNavigationProp<AppStackParamList>;

export type AppStackParamList = {
  AppTabs: NavigatorScreenParams<AppTabParamList>;
};

export type DonateStackParamList = {
  petsChoice: undefined;
  petInfo: petInfoParams;
};

export type AppTabParamList = {
  Home: undefined;
  Adopt: undefined;
  Donate: NavigatorScreenParams<DonateStackParamList>;
  Favorites: undefined;
  Menu: undefined;
};

// Screen Params Interfaces
type petInfoParams = {
  petType: PetType;
};
