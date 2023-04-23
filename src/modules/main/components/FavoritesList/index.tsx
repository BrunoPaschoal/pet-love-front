import { FavoritesCard } from "../../../../components/FavoriteCard";
import { ShowToastArgs } from "../../../../types/CustomToasttypes";
import { FavoritesResponseType } from "../../views/favorites/interfaces/favoriteInterfaces";
import * as S from "./style";

interface FavoritesListProps {
  favorites: FavoritesResponseType;
  showToast: (args: ShowToastArgs) => void;
  unfavoritePet: (petId: number, index: number) => Promise<void>;
}

export const FavoritesList = ({
  favorites,
  showToast,
  unfavoritePet,
}: FavoritesListProps) => {
  return (
    <S.ScrollContainer>
      <S.Container>
        {favorites.map((fav, index) => (
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
      </S.Container>
    </S.ScrollContainer>
  );
};
