import { styled } from "@/theme/stitches.config";

export const Button = styled("button", {
  // position: relative;
  display: "inline-flex",
  gap: "$2",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  // borderRadius: "$md",
  borderRadius: "$xlg",
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

  "&:disabled": {
    boxShadow: "none",
    opacity: 0.4,
    cursor: "not-allowed",
  },

  // can be bundled with compound variants if needed
  "&:focus-visible": {
    boxShadow: "$outline",
  },

  variants: {
    weight: {
      medium: {
        fontWeight: "$medium",
      },
      semibold: {
        fontWeight: "$semibold",
      },
      bold: {
        fontWeight: "$bold",
      },
      normal: {
        fontWeight: "$normal",
      },
      regular: {
        fontWeight: "$extranormal",
      },
    },
    size: {
      xs: {
        fontSize: "$xs",
        height: "$6",
        minWidth: "$6",
        // $$paddingInline: "$space$2",
        paddingInline: "$2",
      },
      sm: {
        fontSize: "$sm",
        height: "$8",
        minWidth: "$8",
        paddingInline: "$3",
      },
      md: {
        // fontSize: "$md",
        fontSize: 20,
        height: "51px", // 51, 54, 54
        minWidth: "$10",
        paddingInline: "$4", // 2rem
      },
      x_md: {
        // fontSize: "$md",
        fontSize: "$sm",
        height: "$10",
        minWidth: "$10",
        paddingInline: "$10",
      },
      xx_md: {
        fontSize: "$sm",
        height: "$10",
        paddingInline: "$4",
        "@md": {
          paddingInline: "$6",
        },
        "@lg": {
          fontSize: "$2xs",
          height: "$8",
          paddingInline: "$4",
        },
      },
      lg: {
        fontSize: "$lg",
        height: "$12",
        minWidth: "$12",
        paddingInline: "$5",
      },
      full_w: {
        fontSize: "$lg",
        height: "$15",
        width: "100%",
        paddingInline: "$5",
      },
      normal: {
        fontSize: "$lg",
        height: "auto",
        padding: "$3 $8",
      },
    },
    color: {
      primary: {
        // for outline and ghost variants
        color: "$primary1",
        borderColor: "$primary1",
        // "&:hover": {
        //   backgroundColor: "$teal50",
        // },
        "&:active": {
          backgroundColor: "$teal100",
        },
      },
      gray: {
        color: "$textGray11",
        borderColor: "$textGray12",
        backgroundColor: "$textGray13",
        // "&:hover": {
        //   backgroundColor: "$gray100",
        // },
        "&:active": {
          backgroundColor: "$gray200",
        },
      },
      google: {
        fontSize: "$xs",
        color: "$white",
        backgroundColor: "$googleBtnColor",
        // "&:hover": {
        //   backgroundColor: "$gray100",
        // },
        "&:active": {
          backgroundColor: "$gray200",
        },
      },
      primary2: {
        // for outline and ghost variants
        color: "$white",
        backgroundColor: "$primary2",
        // "&:hover": {
        //   backgroundColor: "$teal50",
        // },
      },
      sell: {
        color: "$white",
        backgroundColor: "#f6465d",
      },
      red: {
        color: "$error",
        borderColor: "$error",
      },
      cancel: {
        background: "#E35561",
        color: "$white",
        borderColor: "none",
      },
      confirm: {
        background: "$http",
        color: "$white",
        borderColor: "none",
      },
    },
    variant: {
      solid: {},
      outline: {
        // color: "$primary1",
        borderWidth: "1px",
        backgroundColor: "transparent", // bg is already transparent?
      },
      ghost: {
        backgroundColor: "transparent",
        height: "fit-content",
      },
      link: {
        backgroundColor: "transparent",
        height: "fit-content",
        textDecoration: "underline",
        color: "$textBlue1",
        fontSize: "inherit",
        fontWeight: "inherit",
        padding: "0 $2",
      },
    },
    auto: {
      true: {
        width: "auto",
        minWidth: "min-content",
      },
    },
  },
  compoundVariants: [
    // color + solid variant
    {
      variant: "solid",
      color: "primary",
      css: {
        linearGradient: "$buttonGradient",
        color: "$white",
        "&:hover": {
          backgroundColor: "$teal600",
        },
        "&:active": {
          backgroundColor: "$teal700",
        },
      },
    },
    {
      variant: "outline",
      color: "gray",
      css: {
        backgroundColor: "$gray100",
        "&:hover": {
          backgroundColor: "$gray200",
        },
        "&:active": {
          backgroundColor: "$gray300",
        },
      },
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "solid",
    color: "primary",
  },
});
