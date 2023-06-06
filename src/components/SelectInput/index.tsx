import { Control, Controller } from "react-hook-form";
import { SelectInputComponent } from "./SelectInputComponent";

interface GenericSelectInputProps {
  label: string;
  name: string;
  zIndex?: number;
  control: Control<any, any> | undefined;
  isRequired?: boolean;
  errorMessage?: string;
  isDisable?: boolean;
  placeholder?: string;
}

export const SelectInput = ({
  label,
  control,
  zIndex,
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
          zIndex={zIndex}
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
