import { Control, Controller } from "react-hook-form";
import { SelectInputComponent } from "./SelectInputComponent";

interface GenericSelectInputProps {
  label: string;
  name: string;
  control: Control<any, any> | undefined;
  isRequired?: boolean;
  errorMessage?: string;
  isDisable?: boolean;
  placeholder?: string;
}

export const GenericSelectInput = ({
  label,
  control,
  name,
  isRequired,
  errorMessage,
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
          itemSelected={value}
          onChange={onChange}
          errorMessage={error?.message}
          isDisable={isDisable}
          placeholder={placeholder}
          isRequired={isRequired}
        />
      )}
    />
  );
};
