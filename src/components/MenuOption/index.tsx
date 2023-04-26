import * as S from "./style";
import HouseIcon from "../../../assets/icons/house.svg";
import theme from "../../themes/index";

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
