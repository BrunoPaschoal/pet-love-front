import { Control, Controller } from "react-hook-form";
import { RadioButtonComponent } from "./RadioButtonComponent";
import * as S from "./style";

export type RadioListOptionsType = {
  optionName: string;
  optionValue: string;
};

interface RadioButtonInputProps {
  radioListOptions: RadioListOptionsType[];
  label: string;
  name: string;
  control: Control<any, any> | undefined;
  isRequired?: boolean;
  errorMessage?: string;
}

export const RadioButtonInput = ({
  errorMessage,
  label,
  isRequired,
  control,
  name,
  radioListOptions,
}: RadioButtonInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: isRequired || false,
          message: errorMessage || "Campo obrigatório",
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <S.Container>
          <S.LabelContainer>
            <S.InputLabel>{`${label}${isRequired ? "*" : ""}`}</S.InputLabel>
          </S.LabelContainer>
          <S.RadioListContainer>
            {radioListOptions.map((item, i) => (
              <RadioButtonComponent
                key={i}
                option={item}
                isSelected={item.optionValue === value}
                onPress={onChange}
              />
            ))}
          </S.RadioListContainer>
          {error?.message ? <S.TextError>{error?.message}</S.TextError> : null}
        </S.Container>
      )}
    />
  );
};
