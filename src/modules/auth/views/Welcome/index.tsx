import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { propsStack } from "../../../../routes/interfaces/propsNavigationStack";
import * as S from "./style";

export const WelcomeScreen = () => {
  const navigation = useNavigation<propsStack>();

  const handlePressToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <S.Container>
      <S.Title>TELA DE BOAS VINDAS</S.Title>
      <Button title="ir para o login" onPress={() => handlePressToLogin()} />
    </S.Container>
  );
};
