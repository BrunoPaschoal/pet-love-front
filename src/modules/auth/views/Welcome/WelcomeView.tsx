import { GenericButton } from "../../../../components/GenericButton";
import { CallToActionText } from "../../components/CallToActionText";
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
        <CallToActionText
          description="Já possui uma conta?"
          actionText="Login"
          onPressActionText={handlePressToLogin}
        />
      </S.FooterContent>
    </S.Container>
  );
};
