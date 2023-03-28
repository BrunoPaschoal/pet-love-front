import { useNavigation } from "@react-navigation/native";
import validator from "validator";

import { propsStack } from "../../../../routes/interfaces/propsNavigationStack";
import { useForm } from "react-hook-form";
import { SignupView } from "./SignupView";
import { useToast } from "react-native-toast-notifications";

export const Signup = () => {
  const navigation = useNavigation<propsStack>();
  const { handleSubmit, control } = useForm({ mode: "onSubmit" });
  const toast = useToast();

  const handleSubmitLogin = (values: any) => {
    console.log("Valores dos inputs: ", values);
  };

  const validateEmail = (email: string): boolean => {
    if (email) return validator.isEmail(email);
    return true;
  };

  const validatePassword = (password: string): boolean => {
    if (!validator.isLength(password, { min: 8 })) {
      return false;
    }
    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    return regex.test(password);
  };

  return (
    <SignupView
      handleSubmitLogin={handleSubmit(handleSubmitLogin)}
      control={control}
      hidePassword={false}
      validateEmailField={validateEmail}
      validatePasswordField={validatePassword}
    />
  );
};
