import { PetSexType } from "../../types/UserGlobalTypes";
import FemaleIcon from "../../../assets/icons/female.svg";
import MaleIcon from "../../../assets/icons/male.svg";
import theme from "../../themes";
import * as S from "./style";

interface PetSexIndicatorProps {
  sex: PetSexType;
}

export const PetSexIndicator = ({ sex }: PetSexIndicatorProps) => {
  const iconColor = theme["defaultAppTheme"].colors.white;
  const iconSize = 12;
  return (
    <S.Container>
      {sex === PetSexType.FEMALE && (
        <>
          <FemaleIcon width={iconSize} height={iconSize} fill={iconColor} />
          <S.SexName>Fêmea</S.SexName>
        </>
      )}

      {sex === PetSexType.MALE && (
        <>
          <MaleIcon width={iconSize} height={iconSize} fill={iconColor} />
          <S.SexName>Macho</S.SexName>
        </>
      )}
    </S.Container>
  );
};
