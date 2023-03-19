import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../../../../routes/interfaces/propsNavigationStack";
import { useForm } from "react-hook-form";
import { LoginScreen } from "./LoginView";

export const Login = () => {
  const navigation = useNavigation<propsStack>();
  const { handleSubmit, control } = useForm({ mode: "onSubmit" });

  const handleSubmitLogin = (values: any) => {
    console.warn(values);
  };

  return (
    <LoginScreen
      handleSubmitLogin={handleSubmit(handleSubmitLogin)}
      control={control}
      hidePassword={false}
    />
  );
};
