import { ShowToastArgs } from "../../types/CustomToasttypes";
import { PetSexType } from "../../types/UserGlobalTypes";
import { FavoriteButton } from "../FavoriteButton";
import { PetSexIndicator } from "../PetSexIndicator";
import theme from "../../themes";
import * as S from "./style";

interface FavoritesCardProps {
  showToast: (args: ShowToastArgs) => void;
  unfavoritePet: (petId: number, index: number) => Promise<void>;
  petName: string;
  petAge: number;
  index: number;
  ageType: string;
  petId: number;
  sex: PetSexType;
  distance?: string;
  imageUri: string;
}

export const FavoritesCard = ({
  showToast,
  unfavoritePet,
  index,
  petName,
  petAge,
  ageType,
  imageUri,
  sex,
  petId,
  distance,
}: FavoritesCardProps) => {
  return (
    <S.Container style={{ elevation: 8, shadowColor: "#7c7c7c" }}>
      <S.PetImage
        source={{
          uri: imageUri,
        }}
      />
      <S.TextContentContainer>
        <S.PetName>{petName}</S.PetName>
        <S.PetAge>{petAge}</S.PetAge>
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
        activitIndicatorColor={"primary"}
        unfavoritedIconStroke={"gray"}
        isFavorite={true}
        petId={petId}
        showToast={showToast}
        heartSize={25}
        onPress={unfavoritePet}
        index={index}
      />
    </S.Container>
  );
};
