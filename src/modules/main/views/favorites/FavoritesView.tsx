import { AxiosInstance } from "axios";
import { ShowToastArgs } from "../../../../types/CustomToasttypes";
import { FavoritesList } from "../../components/FavoritesList";
import * as S from "./style";

interface FavoritesViewProps {
  axiosInstance: AxiosInstance;
  showToast: (args: ShowToastArgs) => void;
}

export const FavoritesView = ({
  axiosInstance,
  showToast,
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
      <FavoritesList axiosInstance={axiosInstance} showToast={showToast} />
    </S.Container>
  );
};
