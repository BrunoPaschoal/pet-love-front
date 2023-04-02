import { useState, useCallback } from "react";
import { propsStack } from "../../../../routes/interfaces/propsNavigationStack";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { SignupView } from "./SignupView";
import { useToast } from "react-native-toast-notifications";
import useAxios from "./../../../../hooks/useAxios";
import { throwError } from "../../../../helpers/errorHandler";
import {
  validateCellphone,
  validateEmail,
  validatePassword,
} from "../../../../helpers/validadeHelper";
import { SignupResponseType } from "./interfaces/signupResponseType";
import { getPasswordIcons } from "../../../../helpers/getPasswordIcons";
import { SignupFormSubmitType } from "./interfaces/signupFormSubmitType";
import useKeyboardChecker from "../../../../hooks/useKeyboardChecker";

export const Signup = () => {
  const navigation = useNavigation<propsStack>();

  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordHide, setPasswordHide] = useState(true);

  const toast = useToast();
  const api = useAxios();
  const isKeyBoardOpen = useKeyboardChecker();

  const { handleSubmit, control } = useForm<SignupFormSubmitType>({
    mode: "onSubmit",
  });

  const handleSubmitSignup = async (values: SignupFormSubmitType) => {
    try {
      setIsLoading(true);
      await api.post<SignupResponseType>("/users", {
        ...values,
      });

      navigation.navigate("Login");
    } catch (error) {
      throwError(error, toast);
    } finally {
      setIsLoading(false);
    }
  };

  const hideOrShowPassword = () => {
    setPasswordHide(!isPasswordHide);
  };

  const oNPressCallToAction = () => {
    navigation.navigate("Login");
  };

  return (
    <SignupView
      handleSubmitSignup={handleSubmit(handleSubmitSignup)}
      validateEmailField={validateEmail}
      validatePasswordField={validatePassword}
      validateCellphoneField={validateCellphone}
      passwordIcon={getPasswordIcons(isPasswordHide)}
      hideActionText={isKeyBoardOpen}
      oNPressCallToAction={oNPressCallToAction}
      oIconPress={hideOrShowPassword}
      control={control}
      hidePassword={isPasswordHide}
      isLoading={isLoading}
    />
  );
};
