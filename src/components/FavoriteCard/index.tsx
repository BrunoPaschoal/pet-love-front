import { AxiosInstance } from "axios";
import { ShowToastArgs } from "../../types/CustomToasttypes";
import { PetSexType } from "../../types/UserGlobalTypes";
import { FavoriteButton } from "../FavoriteButton";
import { PetSexIndicator } from "../PetSexIndicator";
import theme from "../../themes";
import * as S from "./style";

interface FavoritesCardProps {
  axiosInstance: AxiosInstance;
  showToast: (args: ShowToastArgs) => void;
}

export const FavoritesCard = ({
  axiosInstance,
  showToast,
}: FavoritesCardProps) => {
  return (
    <S.Container style={{ elevation: 8, shadowColor: "#7c7c7c" }}>
      <S.PetImage
        source={{
          uri: "https://www.guarulhosonline.com.br/wp-content/uploads/2022/08/cachorro-dog.jpg",
        }}
      />
      <S.TextContentContainer>
        <S.PetName>Mimo</S.PetName>
        <S.PetAge>4 Meses</S.PetAge>
        <PetSexIndicator
          sex={PetSexType.MALE}
          iconColor={theme["defaultAppTheme"].colors.gray_03}
          textColor={theme["defaultAppTheme"].colors.gray_03}
          fontSize={theme["defaultAppTheme"].fontSizes.p4}
          iconSize={12}
        />
        <S.DistanceFlag>12km de você</S.DistanceFlag>
      </S.TextContentContainer>
      <FavoriteButton
        axiosInstance={axiosInstance}
        activitIndicatorColor={"primary"}
        unfavoritedIconStroke={"gray"}
        isFavorite={true}
        petId={1}
        showToast={showToast}
        heartSize={25}
      />
    </S.Container>
  );
};
