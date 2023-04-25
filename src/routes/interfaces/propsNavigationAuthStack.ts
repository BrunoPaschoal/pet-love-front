import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationAuthStack = {
  Login: LoginRouteParams | undefined;
  Signup: undefined;
  Welcome: undefined;
};

export type LoginRouteParams = {
  email: string;
  password: string;
};

export type AuthNavigationTypes =
  NativeStackNavigationProp<propsNavigationAuthStack>;

//Screen props
export type LoginScreenRouteProp = RouteProp<propsNavigationAuthStack, "Login">;
