import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import useCustomToast from "../../../../hooks/useCustomToast";
import { FavoritesView } from "./FavoritesView";
import { FavoritesResponseType } from "./interfaces/favoriteInterfaces";

export const Favorites = () => {
  const { showToast } = useCustomToast();
  const api = useAxios();
  const [favorites, setFavorites] = useState<FavoritesResponseType>([]);
  const [favoritesLoading, setFavoritesLoading] = useState(true);

  const getFavorites = async () => {
    setFavoritesLoading(true);
    try {
      const favoritesResponse = await api.get<FavoritesResponseType>(
        "/favorite"
      );
      setFavorites(favoritesResponse.data);
    } catch {
      showToast({
        title: "Opps!",
        message: "Ocorreu um erro inesperado, por favor tente mais tarde! 😯",
        type: "ERROR",
      });
    } finally {
      setFavoritesLoading(false);
    }
  };

  const unfavoritePet = async (petId: number, index: number) => {
    const currentFavorites = favorites;
    await api.delete(`favorite/${petId}`);
    currentFavorites.splice(index, 1);
    setFavorites([...currentFavorites]);
  };

  useFocusEffect(
    useCallback(() => {
      getFavorites();
    }, [])
  );

  return (
    <FavoritesView
      showToast={showToast}
      favorites={favorites}
      favoritesLoading={favoritesLoading}
      unfavoritePet={unfavoritePet}
    />
  );
};
