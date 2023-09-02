import { styled } from "@/theme/stitches.config";

export const TextArea = styled("textarea", {
  // Reset
  appearance: "none",
  borderWidth: "1px",
  fontFamily: "inherit",
  margin: "0",
  outline: "none",
  borderRadius: "$2xl-med",
  padding: "$4 $12",
  width: "100%",
  fontWeight: "$regular",
  fontSize: "$lg",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  backgroundColor: "$loContrast",
  boxShadow: "inset 0 0 0 1px $colors$slate7",
  fontVariantNumeric: "tabular-nums",
  position: "relative",
  resize: "vertical",
  color: "$textGray5",
  borderColor: "$borderColor1",
  "&:focus": {
    boxShadow:
      "inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8",
    zIndex: "1",
  },
  "&::placeholder": {
    color: "$inputPlaceholder",
    fontSize: "$md",
  },
  "&:disabled": {
    pointerEvents: "none",
    backgroundColor: "$slate2",
    color: "$slate8",
    cursor: "not-allowed",
    resize: "none",
    "&::placeholder": {
      color: "$slate7",
    },
  },
  "&:read-only": {
    backgroundColor: "$slate2",
    "&:focus": {
      boxShadow: "inset 0px 0px 0px 1px $colors$slate7",
    },
  },

  variants: {
    size: {
      "1": {
        fontSize: "$1",
        lineHeight: "16px",
        px: "$1",
      },
      "2": {
        fontSize: "$2",
        lineHeight: "20px",
        px: "$1",
      },
      "3": {
        lineHeight: "23px",
        px: "$4",
        minHeight: "8rem",
      },
      "4": {
        lineHeight: "23px",
        px: "$4",
      },
    },
    state: {
      invalid: {
        boxShadow: "inset 0 0 0 1px $colors$red7",
        "&:focus": {
          boxShadow:
            "inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8",
        },
      },
      valid: {
        boxShadow: "inset 0 0 0 1px $colors$green7",
        "&:focus": {
          boxShadow:
            "inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8",
        },
      },
    },
    cursor: {
      default: {
        cursor: "default",
        "&:focus": {
          cursor: "text",
        },
      },
      text: {
        cursor: "text",
      },
    },
  },
  defaultVariants: {
    size: "1",
  },
});
