export interface User {
  name: string;
  email: string;
  id: number;
  token: string;
  avatar: string | undefined;
}

export interface LoginArgs {
  name: string;
  id: number;
  email: string;
  avatar: string | undefined;
  token: string;
}

export interface AuthContextType {
  user: User | undefined;
  login: ({ email, avatar, id, name, token }: LoginArgs) => void;
  logout: () => void;
  signed: boolean;
  loading: boolean;
}
