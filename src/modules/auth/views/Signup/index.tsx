import { useState, useCallback } from "react";
import { propsStack } from "../../../../routes/interfaces/propsNavigationStack";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { SignupView } from "./SignupView";
import { useToast } from "react-native-toast-notifications";
import useAxios from "./../../../../hooks/useAxios";
import ClosedEye from "../../../../../assets/icons/closed-eye.svg";
import Eye from "../../../../../assets/icons/eye.svg";
import { throwError } from "../../../../helpers/errorHandler";
import theme from "../../../../themes";
import {
  validateCellphone,
  validateEmail,
  validatePassword,
} from "../../../../helpers/validadeHelper";

export const Signup = () => {
  const { handleSubmit, control } = useForm({ mode: "onSubmit" });
  const navigation = useNavigation<propsStack>();
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordHide, setPasswordHide] = useState(true);
  const toast = useToast();
  const api = useAxios();

  const handleSubmitSignup = async (values: any) => {
    try {
      setIsLoading(true);
      const response = await api.post("/users", { ...values });
      console.log(response.data);
    } catch (error) {
      throwError(error, toast);
    } finally {
      setIsLoading(false);
    }
  };

  const hideOrShowPassword = () => {
    setPasswordHide(!isPasswordHide);
  };

  const getPasswordIcons = useCallback(() => {
    const iconsProps = {
      width: 25,
      height: 35,
      fill: theme["defaultAppTheme"].colors.tertiary_light,
    };

    if (isPasswordHide) {
      return <ClosedEye {...iconsProps} />;
    }

    if (!isPasswordHide) {
      return <Eye {...iconsProps} />;
    }
  }, [isPasswordHide]);

  return (
    <SignupView
      handleSubmitSignup={handleSubmit(handleSubmitSignup)}
      validateEmailField={validateEmail}
      validatePasswordField={validatePassword}
      validateCellphoneField={validateCellphone}
      control={control}
      hidePassword={isPasswordHide}
      isLoading={isLoading}
      oIconPress={hideOrShowPassword}
      passwordIcon={getPasswordIcons()}
    />
  );
};
