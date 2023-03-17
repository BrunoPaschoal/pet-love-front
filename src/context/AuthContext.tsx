import React, { createContext, useState } from "react";
import { LoginArgs, User, UserContextType } from "./interfaces/authInterfaces";

export const UserContext = createContext<UserContextType>({
  user: undefined,
  login: ({ email, password }: LoginArgs) => {},
  logout: () => {},
});

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User>();

  const login = async ({ email, password }: LoginArgs) => {
    setUser({
      id: "3",
      name: "Bruno Rocha",
      email: "bruno.rocha.dev@outlook.com",
      avatar: "http://image.com",
      token: "d9si90da89fuuysd8f7970987sf890s7f",
    });
  };

  const logout = async () => {
    setUser(undefined);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
