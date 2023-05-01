import * as S from "./style";
import { NewcomersCard } from "../../../../components/NewcomersCard";
import { PetResponseType } from "../../views/home/interfaces/HomeInterfaces";
import { ShowToastArgs } from "../../../../types/CustomToasttypes";
import { NewcomersSkeleton } from "../../../../components/Skeletons/NewcomersSkeleton";
import { getUrlFromMainImage } from "../../../../helpers/getUrlFromMainImage";

interface NewcomersSectionProps {
  favoriteOrUnfavoritePet: (petId: number, index: number) => Promise<void>;
  showToast: (args: ShowToastArgs) => void;
  pets: PetResponseType[] | undefined;
  isPetsLoading: boolean;
}

export const NewcomersSection = ({
  showToast,
  favoriteOrUnfavoritePet,
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
            pets.map((pet, index) => (
              <NewcomersCard
                petName={pet?.name}
                petId={pet?.id}
                index={index}
                petCity={pet?.address?.city}
                petState={pet?.address?.state}
                sex={pet.sex}
                imageUri={getUrlFromMainImage(pet?.images)}
                isFavorite={pet.isFavorite}
                favoriteOrUnfavoritePet={favoriteOrUnfavoritePet}
                showToast={showToast}
                key={pet.id}
              />
            ))}
          {isPetsLoading && <NewcomersSkeleton numberOfCards={3} />}
        </S.CardsContainer>
      </S.CardsScrollView>
    </S.Container>
  );
};
