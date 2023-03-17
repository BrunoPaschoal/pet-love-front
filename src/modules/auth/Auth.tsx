import { LoginScreen } from "./views/Login";
import { SignupScreen } from "./views/Register";
import { WelcomeScreen } from "./views/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "../../routes/interfaces/propsNavigationStack";

const Stack = createNativeStackNavigator<propsNavigationStack>();

export const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};
