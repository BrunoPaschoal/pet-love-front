import * as S from "./style";

interface GenericButtonProps {
  title: string;
  customMaxWidth?: string;
  onPressButton: () => void;
}

export const GenericButton = ({
  title,
  onPressButton,
  customMaxWidth,
}: GenericButtonProps) => {
  return (
    <S.Button
      activeOpacity={0.8}
      onPress={() => onPressButton()}
      customMaxWidth={customMaxWidth}
    >
      <S.ButtonText>{title}</S.ButtonText>
    </S.Button>
  );
};
