import * as S from "./style";
import { NewcomersCard } from "../../../../components/NewcomersCard";
import { PetResponseType } from "../../views/home/interfaces/HomeInterfaces";
import { AxiosInstance } from "axios";
import { ShowToastArgs } from "../../../../types/CustomToasttypes";

interface NewcomersSectionProps {
  pets: PetResponseType[] | undefined;
  isPetsLoading: boolean;
  axiosInstance: AxiosInstance;
  showToast: (args: ShowToastArgs) => void;
}

export const NewcomersSection = ({
  showToast,
  isPetsLoading,
  axiosInstance,
  pets,
}: NewcomersSectionProps) => {
  return (
    <S.Container>
      <S.Title>Recém Chegados</S.Title>
      <S.CardsScrollView horizontal showsHorizontalScrollIndicator={false}>
        <S.CardsContainer>
          {!isPetsLoading &&
            pets &&
            pets?.length > 0 &&
            pets.map((pet) => (
              <NewcomersCard
                petName={pet?.name}
                petId={pet?.id}
                petCity={pet?.address?.city}
                petState={pet?.address?.state}
                sex={pet.sex}
                imageUri={pet?.images[0]?.url}
                isFavorite={pet.isFavorite}
                axiosInstance={axiosInstance}
                showToast={showToast}
                key={pet.id}
              />
            ))}
        </S.CardsContainer>
      </S.CardsScrollView>
    </S.Container>
  );
};
