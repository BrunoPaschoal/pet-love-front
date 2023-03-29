import axios from "axios";
import { useContext, useMemo } from "react";
import { AuthContext } from "../context/AuthContext";

const useAxios = () => {
  const { user } = useContext(AuthContext);

  const api = useMemo(
    () =>
      axios.create({
        baseURL: "http://192.168.30.1:3000",
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }),
    [user]
  );

  return api;
};

export default useAxios;
