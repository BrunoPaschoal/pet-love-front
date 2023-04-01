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

  async function loadStorage() {
    // Lógica para buscar no storage e salvar no estado caso tenha usuário
    setLoading(false);
    return null;
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
    // Criar funcão para limpar assync storage aqui
  };

  return (
    <AuthContext.Provider
      value={{ signed: !!user, loading, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
