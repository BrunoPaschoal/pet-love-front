import * as S from "./style";

interface BlogPostCardProps {
  title: string;
  description: string;
  uriImage: string;
}

export const BlogPostCard = ({
  description,
  title,
  uriImage,
}: BlogPostCardProps) => {
  return (
    <S.Container style={{ elevation: 8, shadowColor: "#7c7c7c" }}>
      <S.Image
        source={{
          uri: uriImage,
        }}
      />
      <S.TextContainer>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.TextContainer>
    </S.Container>
  );
};
