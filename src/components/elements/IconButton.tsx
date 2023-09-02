import { styled } from "@/theme/stitches.config";

export const IconButton = styled("button", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,

  appearance: "none",
  userSelect: "none",
  outline: "transparent solid 2px",
  outlineOffset: "2px",
  fontWeight: "$semibold",
  lineHeight: 1.2,
  verticalAlign: "middle",
  whiteSpace: "nowrap",
  transitionProperty: "background-color,border-color,color,box-shadow",
  transitionDuration: "200ms",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  padding: 0,
  borderRadius: "$md",
  color: "inherit",
  backgroundColor: "transparent",
  borderColor: "$gray200",

  "&:disabled": {
    boxShadow: "none",
    opacity: 0.4,
    cursor: "not-allowed",
  },
  // "&:hover": {
  //   backgroundColor: "$gray100",
  // },
  "&:active": {
    backgroundColor: "$gray200",
  },
  "&.drop-down": {
    fontSize: "13px",
    padding: 0,
    WebkitTapHighlightColor: "transparent",
    "&:active": {
      backgroundColor: "transparent",
    },
  },
  "&:focus-visible": {
    boxShadow: "$outline",
  },

  // temporay styles for experimenting
  svg: {
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    color: "inherit",
    lineHeight: "1em",
  },

  variants: {
    size: {
      sm: {
        padding: "$1-5",
      },
      md: {
        fontSize: 20,
        // height: "$8",
        // minWidth: "$8",
        padding: "$2",
      },
    },
    rounded: {
      true: {
        borderRadius: "$full",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
