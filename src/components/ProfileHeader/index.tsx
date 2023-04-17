import * as S from "./style";

interface ProfileHeaderProps {
  title: string;
  description: string;
  avatarUri: string | undefined;
}

export const ProfileHeader = ({
  title,
  description,
  avatarUri,
}: ProfileHeaderProps) => {
  return (
    <S.Container>
      <S.AvatarContainer>
        {avatarUri && <S.AvatarImage source={{ uri: avatarUri }} />}

        {!avatarUri && (
          <S.AvatarImage source={require("../../../assets/pets-avatar.png")} />
        )}
      </S.AvatarContainer>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Container>
  );
};
