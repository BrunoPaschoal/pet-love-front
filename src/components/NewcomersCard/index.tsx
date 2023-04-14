import * as S from "./style";
import HeartIcon from "../../../assets/icons/favorite-white-stroke.svg";
import HeartFilledIcon from "../../../assets/icons/favorite-heart.svg";
import theme from "../../themes";

import { PetSexIndicator } from "../PetSexIndicator";
import { PetSexType } from "../../types/UserGlobalTypes";
import { useState } from "react";

interface NewcomersCardProps {
  petName: string;
  petCity: string;
  sex: PetSexType;
  imageUri: string;
  isFavorite: boolean;
}

export const NewcomersCard = ({
  isFavorite = false,
  imageUri,
  petCity,
  petName,
  sex,
}: NewcomersCardProps) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const iconHeartColor = theme["defaultAppTheme"].colors.primary;
  const iconSize = 20;

  const onPresFavoriteIcon = () => {
    setFavorite(!favorite);
  };

  return (
    <S.Container>
      <S.ImageView source={{ uri: imageUri }}>
        <S.Overlay>
          <S.Content>
            <S.TextContainer>
              <S.PetName>{petName}</S.PetName>
              <S.PetCity>{petCity}</S.PetCity>
              <PetSexIndicator sex={sex} />
            </S.TextContainer>
            <S.IconContainer onPress={onPresFavoriteIcon}>
              {favorite && (
                <HeartFilledIcon
                  width={iconSize}
                  height={iconSize}
                  fill={iconHeartColor}
                />
              )}
              {!favorite && <HeartIcon width={iconSize} height={iconSize} />}
            </S.IconContainer>
          </S.Content>
        </S.Overlay>
      </S.ImageView>
    </S.Container>
  );
};
