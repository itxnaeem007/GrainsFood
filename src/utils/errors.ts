import { z } from "zod";

export const REQUIRED_ERROR = "Field is mandatory";
export const NON_NEGATIVE = "Field must be greater than zero";

export const REQUIRED = (message = REQUIRED_ERROR) =>
  z.string().nonempty({ message });

export const REQUIRED_NUMBER = (message = REQUIRED_ERROR) =>
  z
    .number({
      required_error: message,
    })
    .nonnegative({ message: NON_NEGATIVE });

export const VALID_COUNTRY = z.object(
  { label: z.string(), image: z.string() },
  { required_error: REQUIRED_ERROR }
);
