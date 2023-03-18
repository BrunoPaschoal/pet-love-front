import * as S from "./style";
import { Button } from "react-native";

interface GenericButtonProps {
  title: string;
  onPressButton: () => void;
}

export const GenericButton = ({ title, onPressButton }: GenericButtonProps) => {
  return (
    <S.Button activeOpacity={0.8} onPress={() => onPressButton()}>
      <S.ButtonText>{title}</S.ButtonText>
    </S.Button>
  );
};
