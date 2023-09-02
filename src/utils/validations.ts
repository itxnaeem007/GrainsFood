const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/;

export const passwordValidation = [
  passwordPattern,
  "Password must be at least 6 characters long with one uppercase letter, one lowercase letter, one special character, and one numeral",
] as const;
