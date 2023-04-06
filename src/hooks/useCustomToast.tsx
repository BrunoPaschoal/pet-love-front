import { useCallback } from "react";
import { useToast } from "react-native-toast-notifications";
import { getToastColor, getToastIcon } from "../helpers/toastHelper";
import { ShowToastArgs } from "../types/CustomToasttypes";

const useCustomToast = () => {
  const toast = useToast();

  const showToast = useCallback(
    ({ message, title, type, duration = 5000 }: ShowToastArgs) => {
      toast.show(message, {
        duration,
        icon: getToastIcon(type),
        data: { title: title, color: getToastColor(type) },
      });
    },
    [toast]
  );

  return { showToast };
};

export default useCustomToast;
