import { AxiosInstance } from "axios";
import { FavoritesCard } from "../../../../components/FavoriteCard";
import { ShowToastArgs } from "../../../../types/CustomToasttypes";
import * as S from "./style";

interface FavoritesListProps {
  axiosInstance: AxiosInstance;
  showToast: (args: ShowToastArgs) => void;
}

export const FavoritesList = ({
  axiosInstance,
  showToast,
}: FavoritesListProps) => {
  return (
    <S.ScrollContainer>
      <S.Container>
        <FavoritesCard axiosInstance={axiosInstance} showToast={showToast} />
      </S.Container>
    </S.ScrollContainer>
  );
};
