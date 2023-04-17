import { ActivityIndicator } from "react-native";
import HeartIcon from "../../../assets/icons/favorite-white-stroke.svg";
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
}

export const FavoriteButton = ({
  showToast,
  isFavorite,
  axiosInstance,
  petId,
}: FavoriteButtonProps) => {
  const [favorite, setFavorite] = useState(isFavorite);
  const [loading, setLoading] = useState(false);

  const iconHeartColor = theme["defaultAppTheme"].colors.primary;
  const iconSize = 20;

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
        message:
          "Ocorreu um erro inesperado ao buscar os bichinhos mais recentes, por favor tente mais tarde! 😯",
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
          {!favorite && <HeartIcon width={iconSize} height={iconSize} />}
        </>
      )}

      {loading && (
        <ActivityIndicator
          size="small"
          color={theme["defaultAppTheme"].colors.white}
        />
      )}
    </S.Container>
  );
};
