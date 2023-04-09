import * as S from "./style";
import { ToastProps } from "react-native-toast-notifications/lib/typescript/toast";

export const CustomToast = (toastProps: ToastProps) => {
  return (
    <S.Container
      activeOpacity={0.7}
      style={{
        elevation: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      }}
    >
      <S.Badge badgeColor={toastProps.data?.color}></S.Badge>
      <S.Content>
        <S.TitleContainer>
          {toastProps.icon}
          <S.ToastTitle>{toastProps.data?.title}</S.ToastTitle>
        </S.TitleContainer>
        <S.ToastDescription>{toastProps.message}</S.ToastDescription>
      </S.Content>
    </S.Container>
  );
};
