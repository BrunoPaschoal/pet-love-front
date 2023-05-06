import { ActivityIndicator } from "react-native";
import * as S from "./style";
import theme from "../../themes/index";

interface GenericButtonProps {
  title: string;
  customMaxWidth?: string;
  onPressButton: () => void;
  isLoading?: boolean;
  isOutline?: boolean;
}

export const GenericButton = ({
  onPressButton,
  customMaxWidth,
  isLoading,
  isOutline,
  title,
}: GenericButtonProps) => {
  return (
    <S.Button
      activeOpacity={0.8}
      onPress={() => onPressButton()}
      customMaxWidth={customMaxWidth}
      isOutline={isOutline}
    >
      {isLoading && (
        <ActivityIndicator
          size="small"
          color={theme["defaultAppTheme"].colors.white}
        />
      )}
      {!isLoading && <S.ButtonText isOutline={isOutline}>{title}</S.ButtonText>}
    </S.Button>
  );
};
