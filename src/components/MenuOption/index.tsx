import * as S from "./style";
import HouseIcon from "../../../assets/icons/house.svg";
import theme from "../../themes/index";

export interface MenuOptionPros {
  optionName: string;
  optionIcon: any;
  redirectTo?: string;
  customAction?: () => {};
}

export const MenuOption = ({
  optionIcon,
  optionName,
  customAction,
  redirectTo,
}: MenuOptionPros) => {
  return (
    <S.Container>
      <S.IconContainer>{optionIcon}</S.IconContainer>
      <S.OptionName>{optionName}</S.OptionName>
    </S.Container>
  );
};
