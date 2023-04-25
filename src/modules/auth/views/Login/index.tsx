import { useCallback, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LoginScreen } from "./LoginView";
import useAxios from "../../../../hooks/useAxios";
import { getPasswordIcons } from "../../../../helpers/getPasswordIcons";
import { validateEmail } from "../../../../helpers/validadeHelper";
import { LoginFormSubmitType } from "./interfaces/loginFormSubmitType";
import { LoginResponseType } from "./interfaces/loginResponseType";
import { AuthContext } from "../../../../context/AuthContext";
import useKeyboardChecker from "../../../../hooks/useKeyboardChecker";
import useErrorHandler from "../../../../hooks/useErrorHandler";
import {
  LoginScreenRouteProp,
  AuthNavigationTypes,
} from "../../../../routes/interfaces/propsNavigationAuthStack";

export const Login = () => {
  const { login } = useContext(AuthContext);

  const { throwError } = useErrorHandler();

  const api = useAxios();
  const route = useRoute<LoginScreenRouteProp>();

  const isKeyBoardOpen = useKeyboardChecker();
  const navigation = useNavigation<AuthNavigationTypes>();

  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordHide, setPasswordHide] = useState(true);

  const { handleSubmit, control, setValue } = useForm<LoginFormSubmitType>({
    mode: "onSubmit",
  });

  const processRouteparams = useCallback(() => {
    const LoginRouteParams = route.params;

    if (LoginRouteParams) {
      setValue("email", LoginRouteParams.email);
      setValue("password", LoginRouteParams.password);
    }
    return;
  }, [route.params, setValue]);

  const handleSubmitLogin = async (values: LoginFormSubmitType) => {
    try {
      setIsLoading(true);
      const { data } = await api.post<LoginResponseType>("/auth/login", {
        email: values.email,
        password: values.password,
      });

      login({ ...data });
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
    navigation.navigate("Signup");
  };

  useEffect(() => {
    processRouteparams();
  }, [processRouteparams]);

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
