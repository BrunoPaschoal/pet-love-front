import { TouchableOpacity } from "react-native";
import { GenericButton } from "../../../../components/GenericButton";
import * as S from "./style";

interface WelcomeScreenProps {
  handlePressToLogin: () => void;
  handlePressToRegister: () => void;
}

export const WelcomeView = ({
  handlePressToLogin,
  handlePressToRegister,
}: WelcomeScreenProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.Image
          source={require("../../../../../assets/welcome-image.png")}
          resizeMode="contain"
        />
        <S.Title>Faça um novo amigo</S.Title>
        <S.Description>
          Agora ficou mais fácil encontrar o seu pet
        </S.Description>
        <GenericButton
          title="Começar"
          onPressButton={() => handlePressToRegister()}
          customMaxWidth="280px"
        />
      </S.Content>
      <S.FooterContent>
        <S.FooterText>Já tem uma conta?</S.FooterText>
        <TouchableOpacity onPress={() => handlePressToLogin()}>
          <S.LoginLinkText>Login</S.LoginLinkText>
        </TouchableOpacity>
      </S.FooterContent>
    </S.Container>
  );
};
