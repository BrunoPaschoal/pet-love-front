import { ToastType } from "react-native-toast-notifications";
import { ErrorType } from "../types/ErrorType";

export const throwError = (error: ErrorType | any, toast: ToastType) => {
  const errorMessage = error?.response?.data?.message;
  if (errorMessage) toast.show(errorMessage);
  if (!errorMessage)
    toast.show("Ocorreu um erro inesperado, tente novamente mais tarde! 😵");
};
