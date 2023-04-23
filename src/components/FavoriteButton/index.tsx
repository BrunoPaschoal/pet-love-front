import { ActivityIndicator } from "react-native";
import UnfavoriteIconWhite from "../../../assets/icons/favorite-white-stroke.svg";
import UnfavoriteIconGray from "../../../assets/icons/favorite-gray-stroke.svg";
import HeartFilledIcon from "../../../assets/icons/favorite-heart.svg";
import * as S from "./style";
import theme from "../../themes/index";
import { useState } from "react";
import { ShowToastArgs } from "../../types/CustomToasttypes";

interface FavoriteButtonProps {
  showToast: (args: ShowToastArgs) => void;
  onPress: (petId: number, index: number) => Promise<void>;
  index: number;
  isFavorite: boolean;
  petId: number;
  heartSize?: number;
  activitIndicatorColor: "white" | "primary";
  unfavoritedIconStroke: "white" | "gray";
}

export const FavoriteButton = ({
  showToast,
  onPress,
  isFavorite,
  index,
  activitIndicatorColor,
  unfavoritedIconStroke,
  heartSize,
  petId,
}: FavoriteButtonProps) => {
  const [loading, setLoading] = useState(false);

  const iconHeartColor = theme["defaultAppTheme"].colors.primary;
  const iconSize = heartSize ? heartSize : 20;

  const getUnfavoriteIcon = () => {
    if (unfavoritedIconStroke === "white")
      return <UnfavoriteIconWhite width={iconSize} height={iconSize} />;
    if (unfavoritedIconStroke === "gray")
      return <UnfavoriteIconGray width={iconSize} height={iconSize} />;
  };

  const onPressFavoriteIcon = async () => {
    if (!loading) {
      try {
        setLoading(true);
        await onPress(petId, index);

        if (!isFavorite) {
          showToast({
            title: "Ebaa!",
            message: "Bichinho favoritado com sucesso! 🥰",
            type: "SUCCESS",
          });
        }
      } catch (error) {
        showToast({
          title: "Opps!",
          message: "Ocorreu um erro inesperado, por favor tente mais tarde! 😯",
          type: "ERROR",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <S.Container onPress={onPressFavoriteIcon}>
      {!loading && (
        <>
          {isFavorite && (
            <HeartFilledIcon
              width={iconSize}
              height={iconSize}
              fill={iconHeartColor}
            />
          )}
          {!isFavorite && getUnfavoriteIcon()}
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
