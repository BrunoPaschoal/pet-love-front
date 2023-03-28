import { useNavigation } from "@react-navigation/native";
import validator from "validator";

import { propsStack } from "../../../../routes/interfaces/propsNavigationStack";
import { useForm } from "react-hook-form";
import { LoginScreen } from "./LoginView";
import { useToast } from "react-native-toast-notifications";
export const Login = () => {
  const navigation = useNavigation<propsStack>();
  const { handleSubmit, control } = useForm({ mode: "onSubmit" });
  const toast = useToast();

  const handleSubmitLogin = (values: any) => {
    // Logic
    toast.show("Meu toast porra!");
  };

  const toasst = () => {
    toast.show("My Cystom Description", {
      type: "",
    });
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
      validateEmailField={validateEmail}
    />
  );
};
