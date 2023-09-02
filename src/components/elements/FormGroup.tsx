import { styled } from "@/theme/stitches.config";
import * as Label from "@radix-ui/react-label";

export const FormControl = styled("div", {
  position: "relative",
});

export const FormLabel = styled(Label.Root, {
  display: "block",
  textAlign: "start",
  fontWeight: "$bold",
  fontSize: "$sm",
  marginInlineEnd: "$2",
  marginInlineStart: "$4",
  marginBottom: "$2",
  color: "$textGray5",

  variants: {
    required: {
      true: {
        "&::after": {
          content: '"*"',
          color: "$error",
          marginInlineStart: "$1",
        },
      },
    },
    optional: {
      true: {
        "&::after": {
          content: '"(optional)"',
          color: "$textGray3",
          right: 8,
          fontSize: "$xs",
          position: "absolute",
          marginInlineStart: "$1",
        },
      },
    },
  },
});

export const FormHelperText = styled("div", {
  fontSize: "$sm",
  color: "$gray500",
  marginTop: "$1",
});

export const FormErrorMessage = styled("div", {
  fontSize: "$sm",
  color: "$error",
  marginTop: "$1",
});

// TODO: make this alert component
export const ErrorBox = styled("div", {
  display: "flex",
  alignItems: "center",
  background: "#fefaf9",
  border: "2px solid #fcf0ed",
  padding: "15px",
  fontSize: "12px",
  marginBottom: "20px",
  svg: { mr: "$2", mb: 1 },
});
