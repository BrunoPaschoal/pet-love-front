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
        <BlogPostCard
          title="Leite de soja para doguinhos:"
          description="Confira se há recomendações."
          uriImage="https://www.purina.com.au/-/media/project/purina/about-us/our-values-card.jpg?h=275&la=en&w=540&hash=B2F1CB046CAFABE5BA80A2B3B0D1145A"
        />
        <BlogPostCard
          title="Posse responsável:"
          description="cuidados básicos para manter a saúde e o bem estar dos pets."
          uriImage="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/fi/art/5e5d07a1c3e75.jpeg"
        />
        <BlogPostCard
          title="Meu primeiro gato:"
          description="10 cuidados e a preparação da casa."
          uriImage="https://unionlakepetservices.com/wp-content/uploads/2019/08/ULPS-cat-care-shutterstock_1438770044.jpg"
        />
        <BlogPostCard
          title="Cachorro tem sentimento?"
          description="Veja o que a ciência diz sobre isso."
          uriImage="https://nordic.allianzgi.com/-/media/allianzgi/eu/regional-content/images/pets/haustierboom-frau-mit-hund.jpg?rev=-1&hash=7429649F5A80D64BCD08F710C28C4D69"
        />
      </S.CardsContainer>
    </S.Container>
  );
};
