export const fakePromisse = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("A promessa foi resolvida depois de 3 segundos!");
    }, time);
  });
};
