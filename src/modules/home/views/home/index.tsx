import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../../context/AuthContext";
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

  useEffect(() => {
    getMostRecentsPetDonations();
  }, []);

  return (
    <HomeView
      userAvatar={user?.avatar}
      userName={user?.name}
      pets={petDonations?.pets}
      isPetsLoading={petDonationsLoading}
    />
  );
};
