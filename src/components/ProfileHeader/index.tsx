import * as S from "./style";

interface ProfileHeaderProps {
  title: string;
  description: string;
  avatarUri: string;
}

export const ProfileHeader = ({
  title,
  description,
  avatarUri,
}: ProfileHeaderProps) => {
  return (
    <S.Container>
      <S.AvatarContainer>
        <S.AvatarImage source={{ uri: avatarUri }} />
      </S.AvatarContainer>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Container>
  );
};
