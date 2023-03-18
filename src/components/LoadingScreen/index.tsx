import { ActivityIndicator } from "react-native";
import * as S from "./style";
import theme from "../../themes/index";

export const LoadingScreen = () => {
  return (
    <S.Container>
      <ActivityIndicator
        size="large"
        color={theme["defaultAppTheme"].colors.white}
      />
    </S.Container>
  );
};
