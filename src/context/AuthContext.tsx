import React, { createContext, useEffect, useState } from "react";
import { LoginArgs, User, AuthContextType } from "./interfaces/authInterfaces";

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  login: ({ email, avatar, id, name, token }: LoginArgs) => {},
  logout: () => {},
  signed: false,
  loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  async function waitSeconds() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  async function loadStorage() {
    setLoading(true);
    // Lógica para buscar no storage

    await waitSeconds();

    setUser({
      id: "1",
      name: "Bruno Rocha",
      email: "bruno.rocha.dev@outlook.com",
      avatar: "http://image.com",
      token: "d9si90da89fuuysd8f7970987sf890s7f",
    });
    setLoading(false);
  }

  useEffect(() => {
    loadStorage();
  }, []);

  const login = async ({ id, email, name, avatar, token }: LoginArgs) => {
    setUser({
      id: id,
      name: name,
      email: email,
      avatar: avatar,
      token: token,
    });
  };

  const logout = async () => {
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
