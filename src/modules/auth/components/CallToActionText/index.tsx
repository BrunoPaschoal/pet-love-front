import { TouchableOpacity } from "react-native";
import * as S from "./style";

interface CallToActionTextProps {
  actionText: string;
  description: string;
  onPressActionText: () => void;
}

export const CallToActionText = ({
  actionText,
  description,
  onPressActionText,
}: CallToActionTextProps) => {
  return (
    <S.Container>
      <S.DescriptionText>{description}</S.DescriptionText>
      <TouchableOpacity onPress={() => onPressActionText()}>
        <S.ActionText>{` ${actionText}`}</S.ActionText>
      </TouchableOpacity>
    </S.Container>
  );
};
