import { ToastType } from "../types/CustomToasttypes";
import SuccessIcon from "../../assets/icons/success.svg";
import ErrorIcon from "../../assets/icons/error.svg";
import AttentionIcon from "../../assets/icons/attention.svg";
import themes from "../themes";

export const getToastIcon = (type: keyof typeof ToastType) => {
  const icons = {
    [ToastType.SUCCESS]: <SuccessIcon width={15} height={21} />,
    [ToastType.ERROR]: <ErrorIcon width={15} height={21} />,
    [ToastType.ATTENTION]: <AttentionIcon width={15} height={21} />,
  };
  return icons[type];
};

export const getToastColor = (type: keyof typeof ToastType) => {
  const colors = {
    [ToastType.SUCCESS]: themes["defaultAppTheme"].colors.success,
    [ToastType.ERROR]: themes["defaultAppTheme"].colors.failure,
    [ToastType.ATTENTION]: themes["defaultAppTheme"].colors.warning,
  };
  return colors[type];
};
