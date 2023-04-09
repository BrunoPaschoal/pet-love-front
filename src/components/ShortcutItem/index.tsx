import * as S from "./style";
import { ReactNode } from "react";

export interface ShortcutItemProps {
  title: string;
  icon: ReactNode;
  redirectTo?: string;
}

export const ShortcutItem = ({
  icon,
  title,
  redirectTo,
}: ShortcutItemProps) => {
  return (
    <S.Container>
      <S.IconContainer>{icon}</S.IconContainer>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
      </S.TitleContainer>
    </S.Container>
  );
};
