import * as S from "./style";
import BackIcon from "../../../assets/icons/back-arrow.svg";
import theme from "../../themes";

interface StackHeaderProps {
  pageTitle: string;
}

export const StackHeader = ({ pageTitle }: StackHeaderProps) => {
  return (
    <S.Container>
      <S.ContentBox>
        <S.IconContainer>
          <BackIcon
            width={30}
            height={30}
            fill={theme["defaultAppTheme"].colors.gray_03}
          />
        </S.IconContainer>
        <S.TitleContainer>
          <S.PageTitle>{pageTitle}</S.PageTitle>
        </S.TitleContainer>
      </S.ContentBox>
    </S.Container>
  );
};
