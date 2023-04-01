import { RoleType } from "../../../../../types/UserGlobalTypes";

export type SignupResponseType = {
  name: string;
  email: string;
  phone: string;
  role: RoleType;
  avatar: string | null;
  id: number;
};
