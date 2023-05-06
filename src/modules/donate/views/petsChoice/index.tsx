import { useNavigation } from "@react-navigation/native";
import { GenericButton } from "../../../../components/GenericButton";
import { StackHeader } from "../../../../components/StackHeader";
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
      <StackHeader pageTitle={"Qual pet você gostaria de doar?"} />
      <S.PageContent></S.PageContent>
      <GenericButton title={"Continuar"} onPressButton={() => onPress()} />
    </S.Container>
  );
};
