import { AxiosInstance } from "axios";
import { FavoritesCard } from "../../../../components/FavoriteCard";
import { ShowToastArgs } from "../../../../types/CustomToasttypes";
import { PetSexType } from "../../../../types/UserGlobalTypes";
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
        <FavoritesCard
          axiosInstance={axiosInstance}
          showToast={showToast}
          isFavoite={true}
          petName={"Mimo"}
          petAge={"4"}
          petId={1}
          sex={PetSexType.MALE}
        />
        <FavoritesCard
          axiosInstance={axiosInstance}
          showToast={showToast}
          isFavoite={true}
          petName={"Mimo"}
          petAge={"4"}
          petId={1}
          sex={PetSexType.MALE}
        />
        <FavoritesCard
          axiosInstance={axiosInstance}
          showToast={showToast}
          isFavoite={true}
          petName={"Mimo"}
          petAge={"4"}
          petId={1}
          sex={PetSexType.MALE}
        />
      </S.Container>
    </S.ScrollContainer>
  );
};
