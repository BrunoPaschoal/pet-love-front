import validator from "validator";

export const validateEmail = (email: string): boolean => {
  if (email) return validator.isEmail(email);
  return true;
};

export const validateCellphone = (phoneNumber: string): boolean => {
  if (phoneNumber) return validator.isMobilePhone(phoneNumber, "pt-BR");
  return true;
};

export const validatePassword = (password: string): boolean => {
  if (!validator.isLength(password, { min: 8 })) {
    return false;
  }
  const regex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  return regex.test(password);
};
