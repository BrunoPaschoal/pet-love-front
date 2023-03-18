import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { propsStack } from "../../../../routes/interfaces/propsNavigationStack";
import * as S from "./style";

export const SignupScreen = () => {
  const navigation = useNavigation<propsStack>();

  const handlePressToLogin = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <S.Title>Tela de cadastro</S.Title>
      <Button
        title="Voltar para o login"
        onPress={() => handlePressToLogin()}
      />
    </S.Container>
  );
};
