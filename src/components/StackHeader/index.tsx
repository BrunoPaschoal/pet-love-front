import * as S from "./style";
import BackIcon from "../../../assets/icons/back-arrow.svg";
import theme from "../../themes";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationTypes } from "../../routes/interfaces/propsNavigationApp";

interface StackHeaderProps {
  pageTitle: string;
}

export const StackHeader = ({ pageTitle }: StackHeaderProps) => {
  const navigation = useNavigation<AppNavigationTypes>();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <S.ContentBox>
        <S.IconContainer onPress={goBack}>
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
