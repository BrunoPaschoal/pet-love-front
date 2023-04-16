export const getFirstName = (fullName?: string) => {
  if (fullName) {
    const nameArray = fullName.split(" ");
    return nameArray[0];
  }

  return "";
};
