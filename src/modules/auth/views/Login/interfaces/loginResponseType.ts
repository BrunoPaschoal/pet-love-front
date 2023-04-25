import { RoleType } from "../../../../../types/UserGlobalTypes";

export type LoginResponseType = {
  name: string;
  email: string;
  phone: string;
  role: RoleType;
  avatar: string | undefined;
  token: string;
  id: number;
};
