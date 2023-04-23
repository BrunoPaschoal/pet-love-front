import {
  ImagesType,
  PetAgeType,
  PetSexType,
} from "../../../../../types/UserGlobalTypes";

export type MostRecentsPetDonationsResponseType = {
  pets: PetResponseType[];
  currentPage: number;
  perPageAmount: number;
  total: number;
  totalPages: number;
};

export type PetResponseType = {
  id: number;
  name: string;
  age: number;
  ageType: PetAgeType;
  sex: PetSexType;
  createdAt: string;
  isFavorite: boolean;
  images: ImagesType[];
  address: {
    city: string;
    state: string;
  };
};
