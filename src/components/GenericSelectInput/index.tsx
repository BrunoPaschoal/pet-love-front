import { Control, Controller } from "react-hook-form";
import { SelectInputComponent } from "./SelectInputComponent";

interface GenericSelectInputProps {
  label: string;
  onIconPress?: () => void;
  name: string;
  control: Control<any, any> | undefined;
  isRequired?: boolean;
  errorMessage?: string;
  validateField?: (value: string) => any;
  validateFailMessage?: string;
  isDisable?: boolean;
  placeholder?: string;
}

export const GenericSelectInput = ({
  label,
  onIconPress,
  control,
  name,
  isRequired,
  errorMessage,
  validateFailMessage,
  validateField,
  isDisable,
  placeholder,
}: GenericSelectInputProps) => {
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
        <SelectInputComponent
          label={label}
          value={value}
          onChange={onChange}
          errorMessage={error?.message}
          onIconPress={onIconPress}
          isDisable={isDisable}
          placeholder={placeholder}
          isRequired={isRequired}
        />
      )}
    />
  );
};