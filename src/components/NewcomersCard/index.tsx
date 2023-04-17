import * as S from "./style";

import { PetSexIndicator } from "../PetSexIndicator";
import { PetSexType } from "../../types/UserGlobalTypes";
import { FavoriteButton } from "../FavoriteButton";

interface NewcomersCardProps {
  petName: string;
  petCity: string;
  petState: string;
  sex: PetSexType;
  imageUri: string;
  isFavorite: boolean;
}

export const NewcomersCard = ({
  isFavorite = false,
  imageUri,
  petCity,
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
              <FavoriteButton isFavorite={isFavorite} />
            </S.IconContainer>
          </S.Content>
        </S.Overlay>
      </S.ImageView>
    </S.Container>
  );
};
