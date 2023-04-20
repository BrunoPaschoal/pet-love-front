import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginArgs, User, AuthContextType } from "./interfaces/authInterfaces";

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  login: (args: LoginArgs) => {},
  logout: () => {},
  signed: false,
  loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  async function loadStorage() {
    const userData = await AsyncStorage.getItem("user");
    if (userData) {
      const user: User = JSON.parse(userData);
      setUser(user);
    }
    setLoading(false);
    return null;
  }

  useEffect(() => {
    loadStorage();
  }, []);

  const login = async (user: LoginArgs) => {
    setUser({
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      token: user.token,
    });
    await AsyncStorage.setItem("user", JSON.stringify(user));
  };

  const logout = async () => {
    await AsyncStorage.removeItem("user");
    setUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ signed: !!user, loading, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
