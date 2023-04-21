import { PetSexType } from "../../types/UserGlobalTypes";
import FemaleIcon from "../../../assets/icons/female.svg";
import MaleIcon from "../../../assets/icons/male.svg";
import * as S from "./style";

interface PetSexIndicatorProps {
  sex: PetSexType;
  iconColor: string;
  textColor: string;
  iconSize: number;
  fontSize: string;
}

export const PetSexIndicator = ({
  sex,
  textColor,
  iconColor,
  iconSize,
  fontSize,
}: PetSexIndicatorProps) => {
  return (
    <S.Container>
      {sex === PetSexType.FEMALE && (
        <>
          <FemaleIcon width={iconSize} height={iconSize} fill={iconColor} />
          <S.SexName textColor={textColor} fontSize={fontSize}>
            Fêmea
          </S.SexName>
        </>
      )}

      {sex === PetSexType.MALE && (
        <>
          <MaleIcon width={iconSize} height={iconSize} fill={iconColor} />
          <S.SexName textColor={textColor} fontSize={fontSize}>
            Macho
          </S.SexName>
        </>
      )}
    </S.Container>
  );
};
