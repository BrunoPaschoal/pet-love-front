import { ErrorType } from "../types/ErrorType";
import useCustomToast from "./useCustomToast";

const useErrorHandler = () => {
  const { showToast } = useCustomToast();

  const throwError = (error: ErrorType | any) => {
    const errorMessage =
      error?.response?.data?.message ||
      "Ocorreu um erro inesperado, tente novamente mais tarde! 😵";

    showToast({
      title: "Opps!",
      message: errorMessage,
      type: "ERROR",
    });
  };

  return { throwError };
};

export default useErrorHandler;
