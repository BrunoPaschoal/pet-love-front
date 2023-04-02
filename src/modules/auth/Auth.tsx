import { Login } from "./views/Login";
import { Welcome } from "./views/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "../../routes/interfaces/propsNavigationStack";
import { Signup } from "./views/Signup";

const Stack = createNativeStackNavigator<propsNavigationStack>();

export const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};
