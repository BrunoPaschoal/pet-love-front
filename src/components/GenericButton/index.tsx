import { ActivityIndicator } from "react-native";
import * as S from "./style";
import theme from "../../themes/index";

interface GenericButtonProps {
  title: string;
  customMaxWidth?: string;
  onPressButton: () => void;
  isLoading?: boolean;
  isOutline?: boolean;
  isDisable?: boolean;
}

export const GenericButton = ({
  onPressButton,
  customMaxWidth,
  isDisable,
  isLoading,
  isOutline,
  title,
}: GenericButtonProps) => {
  const buttonHandlePress = () => {
    if (isDisable) return;
    onPressButton();
  };
  return (
    <S.Button
      activeOpacity={0.6}
      onPress={() => buttonHandlePress()}
      customMaxWidth={customMaxWidth}
      isOutline={isOutline}
      isDisable={isDisable}
      disabled={isDisable}
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
