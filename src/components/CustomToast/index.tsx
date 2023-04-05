import * as S from "./style";
import { ToastProps } from "react-native-toast-notifications/lib/typescript/toast";
import Success from "../../../assets/icons/success.svg";

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
      <S.Badge></S.Badge>
      <S.Content>
        <S.TitleContainer>
          <Success width={15} height={21} />
          <S.ToastTitle>Sucesso!</S.ToastTitle>
        </S.TitleContainer>
        <S.ToastDescription>Operação realizada com sucesso!</S.ToastDescription>
      </S.Content>
    </S.Container>
  );
};
