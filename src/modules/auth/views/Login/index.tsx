import { useNavigation } from "@react-navigation/native";
import validator from "validator";

import { propsStack } from "../../../../routes/interfaces/propsNavigationStack";
import { useForm } from "react-hook-form";
import { LoginScreen } from "./LoginView";

export const Login = () => {
  const navigation = useNavigation<propsStack>();
  const { handleSubmit, control } = useForm({ mode: "onSubmit" });

  const handleSubmitLogin = (values: any) => {
    console.warn(values);
  };

  const validateEmail = (email: string): boolean => {
    if (email) return validator.isEmail(email);
    return true;
  };

  return (
    <LoginScreen
      handleSubmitLogin={handleSubmit(handleSubmitLogin)}
      control={control}
      hidePassword={false}
      validateFailMessage="Formato de e-mail inválido"
      validateEmailField={validateEmail}
    />
  );
};
