import { useFocusEffect } from "@react-navigation/native";
import { useContext, useState, useCallback } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { fakePromisse } from "../../../../helpers/fakePromisseHelper";
import useAxios from "../../../../hooks/useAxios";
import useCustomToast from "../../../../hooks/useCustomToast";
import { HomeView } from "./HomeView";
import { MostRecentsPetDonationsResponseType } from "./interfaces/HomeInterfaces";

export const Home = () => {
  const { user } = useContext(AuthContext);
  const api = useAxios();
  const { showToast } = useCustomToast();

  const [petDonations, setPetDonations] =
    useState<MostRecentsPetDonationsResponseType>();

  const [petDonationsLoading, setPetDonationsLoading] = useState(true);

  const getMostRecentsPetDonations = async () => {
    try {
      const petsResponse = await api.get<MostRecentsPetDonationsResponseType>(
        "/pets/donations",
        {
          params: { orderBy: "DESC", page: 1, perPage: 10 },
        }
      );
      setPetDonations(petsResponse.data);
    } catch (error) {
      showToast({
        title: "Opps!",
        message:
          "Ocorreu um erro inesperado ao buscar os bichinhos mais recentes, por favor tente mais tarde! 😯",
        type: "ERROR",
      });
    } finally {
      setPetDonationsLoading(false);
    }
  };

  const favoriteOrUnfavoritePet = async (petId: number, index: number) => {
    if (petDonations?.pets) {
      const donationsForUpdate = petDonations;

      const currentFavoriteStatus = petDonations.pets[index].isFavorite;
      const pet = petDonations.pets[index];

      if (!currentFavoriteStatus) {
        await api.post(`favorite/${petId}`);
      }

      if (currentFavoriteStatus) {
        await api.delete(`favorite/${petId}`);
      }
      // Atualiza os dados da lista de pets marcando como favorito para que não seja necessário fazer uma nova requisição
      pet.isFavorite = !currentFavoriteStatus;
      donationsForUpdate.pets[index] = pet;
      setPetDonations({ ...donationsForUpdate });
    }
  };

  useFocusEffect(
    useCallback(() => {
      getMostRecentsPetDonations();
    }, [])
  );

  return (
    <HomeView
      userAvatar={user?.avatar}
      userName={user?.name}
      pets={petDonations?.pets}
      isPetsLoading={petDonationsLoading}
      showToast={showToast}
      favoriteOrUnfavoritePet={favoriteOrUnfavoritePet}
    />
  );
};
