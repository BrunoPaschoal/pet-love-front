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
  isFavoite: boolean;
  petName: string;
  petAge: string;
  petId: number;
  sex: PetSexType;
  distance?: string;
}

export const FavoritesCard = ({
  axiosInstance,
  showToast,
  petName,
  petAge,
  isFavoite,
  sex,
  petId,
  distance,
}: FavoritesCardProps) => {
  return (
    <S.Container style={{ elevation: 8, shadowColor: "#7c7c7c" }}>
      <S.PetImage
        source={{
          uri: "https://www.guarulhosonline.com.br/wp-content/uploads/2022/08/cachorro-dog.jpg",
        }}
      />
      <S.TextContentContainer>
        <S.PetName>{petName}</S.PetName>
        <S.PetAge>{petAge} Meses</S.PetAge>
        <PetSexIndicator
          sex={sex}
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
        isFavorite={isFavoite}
        petId={petId}
        showToast={showToast}
        heartSize={25}
      />
    </S.Container>
  );
};
