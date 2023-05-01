import { useNavigation } from "@react-navigation/native";
import { GenericButton } from "../../../../components/GenericButton";
import { AppNavigationTypes } from "../../../../routes/interfaces/propsNavigationApp";
import * as S from "./style";

export const PetInfo = () => {
  const navigation = useNavigation<AppNavigationTypes>();

  const onPress = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <GenericButton title={"Voltar"} onPressButton={() => onPress()} />
    </S.Container>
  );
};
