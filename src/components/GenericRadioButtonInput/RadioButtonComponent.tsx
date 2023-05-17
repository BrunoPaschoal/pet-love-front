import { RadioListOptionsType } from ".";
import * as S from "./style";

interface RadioButtonComponentProps {
  option: RadioListOptionsType;
  isSelected: boolean;
  onPress: (optionName: string) => void;
}

export const RadioButtonComponent = ({
  option,
  isSelected,
  onPress,
}: RadioButtonComponentProps) => {
  return (
    <S.Container onPress={() => onPress(option.optionValue)}>
      <S.RadioCircle>
        {isSelected && <S.RadioInnerCircle></S.RadioInnerCircle>}
      </S.RadioCircle>
      <S.OptionTitle>{option.optionName}</S.OptionTitle>
    </S.Container>
  );
};
