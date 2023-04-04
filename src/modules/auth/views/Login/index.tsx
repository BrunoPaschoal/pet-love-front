import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../../routes/interfaces/propsNavigationStack";
import { LoginScreen } from "./LoginView";
import { useToast } from "react-native-toast-notifications";
import useAxios from "../../../../hooks/useAxios";
import { throwError } from "../../../../helpers/errorHandler";
import { getPasswordIcons } from "../../../../helpers/getPasswordIcons";
import { validateEmail } from "../../../../helpers/validadeHelper";
import { LoginFormSubmitType } from "./interfaces/loginFormSubmitType";
import { LoginResponseType } from "./interfaces/loginResponseType";
import { AuthContext } from "../../../../context/AuthContext";
import useKeyboardChecker from "../../../../hooks/useKeyboardChecker";

export const Login = () => {
  const { login } = useContext(AuthContext);

  const api = useAxios();
  const toast = useToast();
  const isKeyBoardOpen = useKeyboardChecker();
  const navigation = useNavigation<propsStack>();

  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordHide, setPasswordHide] = useState(true);

  const { handleSubmit, control } = useForm<LoginFormSubmitType>({
    mode: "onSubmit",
  });

  const handleSubmitLogin = async (values: LoginFormSubmitType) => {
    try {
      setIsLoading(true);
      const { data } = await api.post<LoginResponseType>("/auth/login", {
        email: values.email,
        password: values.password,
      });

      login({ ...data });
    } catch (error) {
      throwError(error, toast);
    } finally {
      setIsLoading(false);
    }
  };

  const hideOrShowPassword = () => {
    setPasswordHide(!isPasswordHide);
  };

  const onPressCallToAction = () => {
    navigation.navigate("Signup");
  };

  return (
    <LoginScreen
      handleSubmitLogin={handleSubmit(handleSubmitLogin)}
      hideActionText={isKeyBoardOpen}
      control={control}
      hidePassword={isPasswordHide}
      validateEmailField={validateEmail}
      passwordIcon={getPasswordIcons(isPasswordHide)}
      onIconPress={hideOrShowPassword}
      isLoading={isLoading}
      onPressCallToAction={onPressCallToAction}
    />
  );
};
