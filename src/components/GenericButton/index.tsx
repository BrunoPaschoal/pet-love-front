import { ActivityIndicator } from "react-native";
import * as S from "./style";
import theme from "../../themes/index";

interface GenericButtonProps {
  title: string;
  customMaxWidth?: string;
  onPressButton: () => void;
  isLoading?: boolean;
}

export const GenericButton = ({
  title,
  onPressButton,
  customMaxWidth,
  isLoading,
}: GenericButtonProps) => {
  return (
    <S.Button
      activeOpacity={0.8}
      onPress={() => onPressButton()}
      customMaxWidth={customMaxWidth}
    >
      {isLoading && (
        <ActivityIndicator
          size="small"
          color={theme["defaultAppTheme"].colors.white}
        />
      )}
      {!isLoading && <S.ButtonText>{title}</S.ButtonText>}
    </S.Button>
  );
};
