import { ActivityIndicator } from "react-native";
import HeartIcon from "../../../assets/icons/favorite-white-stroke.svg";
import HeartFilledIcon from "../../../assets/icons/favorite-heart.svg";
import * as S from "./style";
import theme from "../../themes/index";
import { useState } from "react";

interface FavoriteButtonProps {
  isFavorite: boolean;
}

export const FavoriteButton = ({ isFavorite }: FavoriteButtonProps) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const iconHeartColor = theme["defaultAppTheme"].colors.primary;
  const iconSize = 20;

  const onPresFavoriteIcon = () => {
    setFavorite(!favorite);
  };

  return (
    <S.Container onPress={onPresFavoriteIcon}>
      {favorite && (
        <HeartFilledIcon
          width={iconSize}
          height={iconSize}
          fill={iconHeartColor}
        />
      )}
      {!favorite && <HeartIcon width={iconSize} height={iconSize} />}
    </S.Container>
  );
};
