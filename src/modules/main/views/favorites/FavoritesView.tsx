import { ShowToastArgs } from "../../../../types/CustomToasttypes";
import { FavoritesList } from "../../components/FavoritesList";
import { FavoritesResponseType } from "./interfaces/favoriteInterfaces";
import * as S from "./style";

interface FavoritesViewProps {
  favorites: FavoritesResponseType;
  favoritesLoading: boolean;
  showToast: (args: ShowToastArgs) => void;
  unfavoritePet: (petId: number, index: number) => Promise<void>;
}

export const FavoritesView = ({
  showToast,
  unfavoritePet,
  favorites,
  favoritesLoading,
}: FavoritesViewProps) => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.PageTitle>Favoritos</S.PageTitle>
        <S.DescriptionContainer>
          <S.Description>
            Bichinhos fofos que fazem parte da sua lista de favoritos:
          </S.Description>
        </S.DescriptionContainer>
      </S.HeaderContainer>
      <FavoritesList
        showToast={showToast}
        favorites={favorites}
        unfavoritePet={unfavoritePet}
      />
    </S.Container>
  );
};
