import { Login } from "./views/Login";
import { Welcome } from "./views/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationAuthStack } from "../../routes/interfaces/propsNavigationAuthStack";
import { Signup } from "./views/Signup";

const AuthStack = createNativeStackNavigator<propsNavigationAuthStack>();

export const Auth = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
};
