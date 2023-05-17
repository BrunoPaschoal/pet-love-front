import { RadioButtonComponent } from "./RadioButtonComponent";
import * as S from "./style";

interface RadioButtonInputProps {
  valueSelected: string | undefined;
  onPress: (optionName: string) => void;
  radioListOptions: RadioListOptionsType[];
}

export type RadioListOptionsType = {
  optionName: string;
};

export const RadioButtonInput = ({
  onPress,
  valueSelected,
  radioListOptions,
}: RadioButtonInputProps) => {
  return (
    <S.RadioListContainer>
      {radioListOptions.map((item, i) => (
        <RadioButtonComponent
          key={i}
          optioName={item.optionName}
          isSelected={item.optionName === valueSelected}
          onPress={onPress}
        />
      ))}
    </S.RadioListContainer>
  );
};
