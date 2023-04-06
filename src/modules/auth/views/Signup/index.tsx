import { useState } from "react";
import { propsStack } from "../../../../routes/interfaces/propsNavigationStack";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { SignupView } from "./SignupView";
import useAxios from "./../../../../hooks/useAxios";
import { SignupResponseType } from "./interfaces/signupResponseType";
import { getPasswordIcons } from "../../../../helpers/getPasswordIcons";
import { SignupFormSubmitType } from "./interfaces/signupFormSubmitType";
import useCustomToast from "../../../../hooks/useCustomToast";
import useErrorHandler from "../../../../hooks/useErrorHandler";
import {
  validateCellphone,
  validateEmail,
  validatePassword,
} from "../../../../helpers/validadeHelper";

export const Signup = () => {
  const navigation = useNavigation<propsStack>();

  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordHide, setPasswordHide] = useState(true);

  const { throwError } = useErrorHandler();
  const { showToast } = useCustomToast();
  const api = useAxios();

  const { handleSubmit, control } = useForm<SignupFormSubmitType>({
    mode: "onSubmit",
  });

  const handleSubmitSignup = async (values: SignupFormSubmitType) => {
    try {
      setIsLoading(true);
      await api.post<SignupResponseType>("/users", {
        ...values,
      });

      showToast({
        title: "Ebaa!",
        type: "SUCCESS",
        message: "Conta criada com sucesso! 🎉",
      });

      navigation.navigate("Login", {
        email: values.email,
        password: values.password,
      });
    } catch (error) {
      throwError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const hideOrShowPassword = () => {
    setPasswordHide(!isPasswordHide);
  };

  const onPressCallToAction = () => {
    navigation.navigate("Login");
  };

  return (
    <SignupView
      handleSubmitSignup={handleSubmit(handleSubmitSignup)}
      validateEmailField={validateEmail}
      validatePasswordField={validatePassword}
      validateCellphoneField={validateCellphone}
      passwordIcon={getPasswordIcons(isPasswordHide)}
      hideActionText={false}
      onPressCallToAction={onPressCallToAction}
      oIconPress={hideOrShowPassword}
      control={control}
      hidePassword={isPasswordHide}
      isLoading={isLoading}
    />
  );
};
