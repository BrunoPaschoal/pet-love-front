export type RoleType = {
  id: number;
  name: UserRole;
};

export enum UserRole {
  USER = "USER",
}

export enum PetSexType {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum PetAgeType {
  YEARS = "YEARS",
  MONTHS = "MONTHS",
}

export type ImagesType = {
  id: number;
  url: string;
  imageKey: string;
};
