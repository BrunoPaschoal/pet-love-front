import * as S from "./style";
import theme from "../../themes";

import { PetSexIndicator } from "../PetSexIndicator";
import { PetSexType } from "../../types/UserGlobalTypes";
import { FavoriteButton } from "../FavoriteButton";
import { ShowToastArgs } from "../../types/CustomToasttypes";

interface NewcomersCardProps {
  showToast: (args: ShowToastArgs) => void;
  favoriteOrUnfavoritePet: (petId: number, index: number) => Promise<void>;
  petName: string;
  petCity: string;
  petState: string;
  sex: PetSexType;
  imageUri: string;
  isFavorite: boolean;
  petId: number;
  index: number;
}

export const NewcomersCard = ({
  showToast,
  favoriteOrUnfavoritePet,
  index,
  isFavorite = false,
  imageUri,
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
              <PetSexIndicator
                sex={sex}
                iconColor={theme["defaultAppTheme"].colors.white}
                textColor={theme["defaultAppTheme"].colors.white}
                fontSize={theme["defaultAppTheme"].fontSizes.p3}
                iconSize={12}
              />
            </S.TextContainer>
            <S.IconContainer>
              <FavoriteButton
                isFavorite={isFavorite}
                onPress={favoriteOrUnfavoritePet}
                unfavoritedIconStroke={"white"}
                petId={petId}
                index={index}
                showToast={showToast}
                activitIndicatorColor={"white"}
              />
            </S.IconContainer>
          </S.Content>
        </S.Overlay>
      </S.ImageView>
    </S.Container>
  );
};
