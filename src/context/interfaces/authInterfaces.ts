export interface User {
  name: string;
  email: string;
  id: number;
  token: string;
  avatar: string;
}

export interface LoginArgs {
  name: string;
  id: number;
  email: string;
  avatar: string;
  token: string;
}

export interface AuthContextType {
  user: User | undefined;
  login: ({ email, avatar, id, name, token }: LoginArgs) => void;
  logout: () => void;
  signed: boolean;
  loading: boolean;
}
