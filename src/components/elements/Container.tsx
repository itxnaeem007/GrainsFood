import { styled } from "@/theme";

export const Container = styled("div", {
  flexShrink: 0,
  ml: "auto",
  mr: "auto",
  // px: "$5",

  variants: {
    size: {
      xs: {
        maxWidth: "$breakpoints$xs",
      },
      sm: {
        maxWidth: "$breakpoints$sm",
      },
      md: {
        maxWidth: "$breakpoints$md",
      },
      lg: {
        maxWidth: "$breakpoints$lg",
      },
      xl: {
        maxWidth: "$breakpoints$xl",
      },
      fluid: {
        maxWidth: "none",
      },
    },
  },
  defaultVariants: {
    size: "fluid",
  },
  "@md": {
    maxWidth: "$breakpoints$md !important",
  },
  "@lg": {
    maxWidth: "$breakpoints$lg !important",
  },
  "@xl": {
    maxWidth: "$breakpoints$xl !important",
  },
  "@xxl": {
    maxWidth: "$breakpoints$xl !important",
  },
  "@3xl": {
    maxWidth: "$breakpoints$xxl !important",
  },
});
