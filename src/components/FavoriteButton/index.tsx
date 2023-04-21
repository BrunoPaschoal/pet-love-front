import { ActivityIndicator } from "react-native";
import UnfavoriteIconWhite from "../../../assets/icons/favorite-white-stroke.svg";
import UnfavoriteIconGray from "../../../assets/icons/favorite-gray-stroke.svg";
import HeartFilledIcon from "../../../assets/icons/favorite-heart.svg";
import * as S from "./style";
import theme from "../../themes/index";
import { useState } from "react";
import { AxiosInstance } from "axios";
import { ShowToastArgs } from "../../types/CustomToasttypes";

interface FavoriteButtonProps {
  showToast: (args: ShowToastArgs) => void;
  isFavorite: boolean;
  axiosInstance: AxiosInstance;
  petId: number;
  heartSize?: number;
  activitIndicatorColor: "white" | "primary";
  unfavoritedIconStroke: "white" | "gray";
}

export const FavoriteButton = ({
  showToast,
  isFavorite,
  axiosInstance,
  activitIndicatorColor,
  unfavoritedIconStroke,
  heartSize,
  petId,
}: FavoriteButtonProps) => {
  const [favorite, setFavorite] = useState(isFavorite);
  const [loading, setLoading] = useState(false);

  const iconHeartColor = theme["defaultAppTheme"].colors.primary;
  const iconSize = heartSize ? heartSize : 20;

  const getUnfavoriteIcon = () => {
    if (unfavoritedIconStroke === "white")
      return <UnfavoriteIconWhite width={iconSize} height={iconSize} />;
    if (unfavoritedIconStroke === "gray")
      return <UnfavoriteIconGray width={iconSize} height={iconSize} />;
  };

  const onPresFavoriteIcon = async () => {
    setLoading(true);
    try {
      if (!favorite) {
        await axiosInstance.post(`favorite-pet/${petId}`);
        showToast({
          title: "Ebaa!",
          message: "Bichinho favoritado com sucesso! 🥰",
          type: "SUCCESS",
        });
      }

      if (favorite) {
        await axiosInstance.delete(`favorite-pet/${petId}`);
      }
      setFavorite(!favorite);
    } catch {
      showToast({
        title: "Opps!",
        message: "Ocorreu um erro inesperado, por favor tente mais tarde! 😯",
        type: "ERROR",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container onPress={onPresFavoriteIcon}>
      {!loading && (
        <>
          {favorite && (
            <HeartFilledIcon
              width={iconSize}
              height={iconSize}
              fill={iconHeartColor}
            />
          )}
          {!favorite && getUnfavoriteIcon()}
        </>
      )}

      {loading && (
        <ActivityIndicator
          size="small"
          color={theme["defaultAppTheme"].colors[activitIndicatorColor]}
        />
      )}
    </S.Container>
  );
};
