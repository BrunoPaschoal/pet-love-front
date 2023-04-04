import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  Login: LoginRouteParams | undefined;
  Signup: undefined;
  Welcome: undefined;
};

export type LoginRouteParams = {
  email: string;
  password: string;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;

export type LoginScreenRouteProp = RouteProp<propsNavigationStack, "Login">;
