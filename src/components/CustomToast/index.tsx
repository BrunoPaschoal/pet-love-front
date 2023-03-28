import * as S from "./style";
import { ToastProps } from "react-native-toast-notifications/lib/typescript/toast";

export const CustomToast = (toastProps: ToastProps) => {
  return (
    <S.Container activeOpacity={0.7}>
      <S.ToastDescription>{toastProps.message}</S.ToastDescription>
    </S.Container>
  );
};
