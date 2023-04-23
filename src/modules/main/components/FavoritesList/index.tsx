import { FavoritesCard } from "../../../../components/FavoriteCard";
import { FavoritesSkeleton } from "../../../../components/Skeletons/FavoritesSkeleton";
import { ShowToastArgs } from "../../../../types/CustomToasttypes";
import { FavoritesResponseType } from "../../views/favorites/interfaces/favoriteInterfaces";
import * as S from "./style";

interface FavoritesListProps {
  showToast: (args: ShowToastArgs) => void;
  unfavoritePet: (petId: number, index: number) => Promise<void>;
  favorites: FavoritesResponseType;
  isFavoriteLoading: boolean;
}

export const FavoritesList = ({
  showToast,
  unfavoritePet,
  favorites,
  isFavoriteLoading,
}: FavoritesListProps) => {
  return (
    <S.ScrollContainer>
      <S.Container>
        {!isFavoriteLoading &&
          favorites.map((fav, index) => (
            <FavoritesCard
              showToast={showToast}
              unfavoritePet={unfavoritePet}
              petName={fav?.pet?.name}
              petAge={fav?.pet?.age}
              ageType={fav?.pet?.ageType}
              petId={fav?.pet?.id}
              sex={fav?.pet?.sex}
              imageUri={fav?.pet?.images[0].url}
              index={index}
              key={fav?.id}
            />
          ))}
        {isFavoriteLoading && <FavoritesSkeleton numberOfCards={10} />}
      </S.Container>
    </S.ScrollContainer>
  );
};
