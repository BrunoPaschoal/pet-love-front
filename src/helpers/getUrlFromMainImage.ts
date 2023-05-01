import { ImagesType } from "../types/UserGlobalTypes";

export const getUrlFromMainImage = (images: ImagesType[]) => {
  if (!images) return;
  return images.find((objeto) => objeto.isMain === true)?.url;
};
