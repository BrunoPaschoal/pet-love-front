import { Control, Controller } from "react-hook-form";
import { AutocompleteInputComponent } from "./AutocompleteInputComponent";
import { ListItemType } from "./types/AutocompleteInputTypes";

interface AutocompleteInputProps {
  label: string;
  name: string;
  zIndex?: number;
  data: ListItemType[];
  control: Control<any, any> | undefined;
  isRequired?: boolean;
  errorMessage?: string;
  isDisable?: boolean;
  placeholder?: string;
}

export const AutocompleteInput = ({
  label,
  control,
  zIndex,
  data,
  name,
  isRequired,
  errorMessage,
  isDisable,
  placeholder,
}: AutocompleteInputProps) => {
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
        <AutocompleteInputComponent
          data={data}
          label={label}
          itemSelected={value}
          onChange={onChange}
          errorMessage={error?.message}
          zIndex={zIndex}
          isDisable={isDisable}
          placeholder={placeholder}
          isRequired={isRequired}
        />
      )}
    />
  );
};
