import useAxios from "../../../../hooks/useAxios";
import useCustomToast from "../../../../hooks/useCustomToast";
import { FavoritesView } from "./FavoritesView";

export const Favorites = () => {
  const { showToast } = useCustomToast();
  const api = useAxios();

  return <FavoritesView axiosInstance={api} showToast={showToast} />;
};
