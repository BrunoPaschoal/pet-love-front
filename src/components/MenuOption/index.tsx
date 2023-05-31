import * as S from "./style";

export interface MenuOptionPros {
  optionName: string;
  optionIcon: any;
  onPress?: () => void;
}

export const MenuOption = ({
  optionIcon,
  optionName,
  onPress,
}: MenuOptionPros) => {
  return (
    <S.Container onPress={onPress}>
      <S.IconContainer>{optionIcon}</S.IconContainer>
      <S.OptionName>{optionName}</S.OptionName>
    </S.Container>
  );
};
