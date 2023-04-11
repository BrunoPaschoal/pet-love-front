import * as S from "./style";
import { NewcomersCard } from "../../../../components/NewcomersCard";

export const NewcomersSection = () => {
  return (
    <S.Container>
      <S.Title>Recém Chegados</S.Title>
      <S.CardsScrollView horizontal showsHorizontalScrollIndicator={false}>
        <S.CardsContainer>
          <NewcomersCard />
          <NewcomersCard />
          <NewcomersCard />
          <NewcomersCard />
        </S.CardsContainer>
      </S.CardsScrollView>
    </S.Container>
  );
};
