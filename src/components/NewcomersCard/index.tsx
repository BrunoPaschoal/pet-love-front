import * as S from "./style";

import { PetSexIndicator } from "../PetSexIndicator";
import { PetSexType } from "../../types/UserGlobalTypes";
import { FavoriteButton } from "../FavoriteButton";
import { AxiosInstance } from "axios";
import { ShowToastArgs } from "../../types/CustomToasttypes";

interface NewcomersCardProps {
  petName: string;
  petCity: string;
  petState: string;
  sex: PetSexType;
  imageUri: string;
  isFavorite: boolean;
  axiosInstance: AxiosInstance;
  showToast: (args: ShowToastArgs) => void;
  petId: number;
}

export const NewcomersCard = ({
  showToast,
  isFavorite = false,
  imageUri,
  axiosInstance,
  petCity,
  petId,
  petState,
  petName,
  sex,
}: NewcomersCardProps) => {
  return (
    <S.Container>
      <S.ImageView source={{ uri: imageUri }}>
        <S.Overlay>
          <S.Content>
            <S.TextContainer>
              <S.PetName>{petName}</S.PetName>
              <S.PetCity>{`${petCity}-${petState}`}</S.PetCity>
              <PetSexIndicator sex={sex} />
            </S.TextContainer>
            <S.IconContainer>
              <FavoriteButton
                isFavorite={isFavorite}
                axiosInstance={axiosInstance}
                petId={petId}
                showToast={showToast}
              />
            </S.IconContainer>
          </S.Content>
        </S.Overlay>
      </S.ImageView>
    </S.Container>
  );
};
