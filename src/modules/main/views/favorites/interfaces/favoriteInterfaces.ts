import {
  ImagesType,
  PetAgeType,
  PetSexType,
} from "../../../../../types/UserGlobalTypes";

export type FavoritesResponseType = FavoritesType[];

export type FavoritesType = {
  id: number;
  pet: FavoritePet;
};

type FavoritePet = {
  id: number;
  name: string;
  age: number;
  ageType: PetAgeType;
  sex: PetSexType;
  images: ImagesType[];
};
