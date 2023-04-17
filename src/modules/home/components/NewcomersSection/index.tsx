import * as S from "./style";
import { NewcomersCard } from "../../../../components/NewcomersCard";
import { PetResponseType } from "../../views/home/interfaces/HomeInterfaces";

interface NewcomersSectionProps {
  pets: PetResponseType[] | undefined;
  isPetsLoading: boolean;
}

export const NewcomersSection = ({
  isPetsLoading,
  pets,
}: NewcomersSectionProps) => {
  return (
    <S.Container>
      <S.Title>Recém Chegados</S.Title>
      <S.CardsScrollView horizontal showsHorizontalScrollIndicator={false}>
        <S.CardsContainer>
          {!isPetsLoading &&
            pets &&
            pets?.length > 0 &&
            pets.map((pet) => (
              <NewcomersCard
                petName={pet?.name}
                petCity={pet?.address?.city}
                petState={pet?.address?.state}
                sex={pet.sex}
                imageUri={pet?.images[0]?.url}
                isFavorite={pet.isFavorite}
                key={pet.id}
              />
            ))}
        </S.CardsContainer>
      </S.CardsScrollView>
    </S.Container>
  );
};
