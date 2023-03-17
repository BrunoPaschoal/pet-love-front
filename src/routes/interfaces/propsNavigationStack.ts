import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  Login: undefined;
  Signup: undefined;
  Welcome: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
