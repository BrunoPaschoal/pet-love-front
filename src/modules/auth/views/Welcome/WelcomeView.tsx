import { GenericButton } from "../../../../components/GenericButton";
import * as S from "./style";

interface WelcomeScreenProps {
  handlePressToLogin: () => void;
}

export const WelcomeView = ({ handlePressToLogin }: WelcomeScreenProps) => {
  return (
    <S.Container>
      <GenericButton title="Começar" onPressButton={handlePressToLogin} />
    </S.Container>
  );
};
