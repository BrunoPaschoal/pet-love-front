import * as S from "./style";
import { ReactNode } from "react";

export interface ShortcutItemProps {
  title: string;
  icon: ReactNode;
  navigateTo?: string;
}

export const ShortcutItem = ({
  icon,
  title,
  navigateTo,
}: ShortcutItemProps) => {
  const navigateToScreen = () => {
    // Implement navigation
  };
  return (
    <S.Container onPress={navigateToScreen}>
      <S.IconContainer>{icon}</S.IconContainer>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
      </S.TitleContainer>
    </S.Container>
  );
};
