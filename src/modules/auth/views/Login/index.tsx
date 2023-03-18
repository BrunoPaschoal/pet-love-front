import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { propsStack } from "../../../../routes/interfaces/propsNavigationStack";
import * as S from "./style";

export const LoginScreen = () => {
  const navigation = useNavigation<propsStack>();

  const handlePressToLogin = () => {
    navigation.navigate("Signup");
  };

  return (
    <S.Container>
      <S.Title>Tela de Login</S.Title>
      <Button title="Ir para Cadastro" onPress={() => handlePressToLogin()} />
    </S.Container>
  );
};
