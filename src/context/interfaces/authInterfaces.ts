export interface User {
  name: string;
  email: string;
  id: string;
  token: string;
  avatar: string;
}

export interface LoginArgs {
  email: string;
  password: string;
}

export interface UserContextType {
  user: User | undefined;
  login: ({ email, password }: LoginArgs) => void;
  logout: () => void;
}
