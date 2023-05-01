import { createStackNavigator } from "@react-navigation/stack";
import { DonateStackParamList } from "../../routes/interfaces/propsNavigationApp";
import { PetInfo } from "./views/petInfo";
import { PetsChoice } from "./views/petsChoice";

const DonateStack = createStackNavigator<DonateStackParamList>();

export const DonateStackRoutes = () => {
  return (
    <DonateStack.Navigator
      initialRouteName="petsChoice"
      screenOptions={{ headerShown: false }}
    >
      <DonateStack.Screen name="petsChoice" component={PetsChoice} />
      <DonateStack.Screen name="petInfo" component={PetInfo} />
    </DonateStack.Navigator>
  );
};
