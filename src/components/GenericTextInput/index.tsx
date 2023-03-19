import { ReactNode } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { InputTextComponent } from "./InputTextComponent";

interface GenericTextInputProps {
  label: string;
  icon?: ReactNode;
  onIconPress?: () => void;
  hideInputValue?: boolean;
  name: string;
  control: Control<FieldValues, any> | undefined;
  isRequired?: boolean;
  errorMessage?: string;
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
        />
      )}
    />
  );
};
