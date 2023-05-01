import { useNavigation } from "@react-navigation/native";
import { GenericButton } from "../../../../components/GenericButton";
import { AppNavigationTypes } from "../../../../routes/interfaces/propsNavigationApp";
import * as S from "./style";

export const PetsChoice = () => {
  const navigation = useNavigation<AppNavigationTypes>();

  const onPress = () => {
    navigation.navigate("AppTabs", {
      screen: "Donate",
      params: {
        screen: "petInfo",
      },
    });
  };

  return (
    <S.Container>
      <GenericButton title={"Continuar"} onPressButton={() => onPress()} />
    </S.Container>
  );
};
