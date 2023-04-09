export const getFirstName = (fullName: string) => {
  const nameArray = fullName.split(" ");
  return nameArray[0];
};
