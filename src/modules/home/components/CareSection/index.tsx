import * as S from "./style";
import ArrowRight from "../../../../../assets/icons/arrow-right.svg";
import theme from "../../../../themes";
import { BlogPostCard } from "../../../../components/BlogPostCard";

export const CareSection = () => {
  return (
    <S.Container>
      <S.CareSectionHeaderContainer>
        <S.Title>Cuidados</S.Title>
        <S.SeeItAllContainer>
          <S.SeeItAllButton>Ver tudo</S.SeeItAllButton>
          <ArrowRight
            width={9}
            height={9}
            fill={theme["defaultAppTheme"].colors.secondary}
          />
        </S.SeeItAllContainer>
      </S.CareSectionHeaderContainer>
      <S.CareSectionDescription>
        Confira artigos que te ajudam a cuidar melhor do seu pet:
      </S.CareSectionDescription>
      <S.CardsContainer>
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
      </S.CardsContainer>
    </S.Container>
  );
};
