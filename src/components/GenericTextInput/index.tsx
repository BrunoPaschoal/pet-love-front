import { ReactNode } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { TextInputMaskTypeProp } from "react-native-masked-text";
import { InputTextComponent } from "./InputTextComponent";

interface GenericTextInputProps {
  label: string;
  icon?: ReactNode;
  onIconPress?: () => void;
  hideInputValue?: boolean;
  name: string;
  control: Control<any, any> | undefined;
  isRequired?: boolean;
  errorMessage?: string;
  mask?: TextInputMaskTypeProp;
  validateField?: (value: string) => any;
  validateFailMessage?: string;
  isDisable?: boolean;
  placeholder?: string;
}

export const GenericTextInput = ({
  label,
  icon,
  onIconPress,
  hideInputValue,
  control,
  name,
  isRequired,
  errorMessage,
  mask,
  validateFailMessage,
  validateField,
  isDisable,
  placeholder,
}: GenericTextInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: isRequired || false,
          message: errorMessage || "Campo obrigatório",
        },
        validate: (value) => {
          if (validateField)
            return (
              validateField(value) || validateFailMessage || "Formato inválido"
            );
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputTextComponent
          label={label}
          value={value}
          onChange={onChange}
          errorMessage={error?.message}
          hideInputValue={hideInputValue}
          icon={icon}
          onIconPress={onIconPress}
          mask={mask}
          isDisable={isDisable}
          placeholder={placeholder}
          isRequired={isRequired}
        />
      )}
    />
  );
};
