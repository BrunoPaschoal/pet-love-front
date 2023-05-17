import * as S from "./style";

interface RadioButtonComponentProps {
  optioName: string;
  isSelected: boolean;
  onPress: (optionName: string) => void;
}

export const RadioButtonComponent = ({
  optioName,
  isSelected,
  onPress,
}: RadioButtonComponentProps) => {
  return (
    <S.Container onPress={() => onPress(optioName)}>
      <S.RadioCircle>
        {isSelected && <S.RadioInnerCircle></S.RadioInnerCircle>}
      </S.RadioCircle>
      <S.OptionTitle>{optioName}</S.OptionTitle>
    </S.Container>
  );
};
