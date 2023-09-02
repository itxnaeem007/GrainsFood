import React from "react";
import { styled, VariantProps, CSS } from "@/theme/stitches.config";
import * as SwitchPrimitive from "@radix-ui/react-switch";

const StyledSwitch = styled(SwitchPrimitive.Root, {
  userSelect: "none",
  boxShadow: "$sm",

  // Reset
  boxSizing: "content-box",
  display: "inline-flex",
  justifyContent: "flex-start",
  lineHeight: "1",
  padding: "$0-5",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  position: "relative",

  $$switchBg: "$colors$white",
  $$switchThumbBg: "$colors$toggleThumb",
  $$switchThumbShadow: "none",
  $$switchThumbX: "calc($$switchTrackWidth - $$switchTrackHeight)",
  backgroundColor: "$$switchBg",
  borderRadius: "$xlg",
  width: "$$switchTrackWidth",
  height: "$$switchTrackHeight",

  "&:focus-visible": {
    boxShadow: "$outline",
  },
  '&[data-state="checked"]': {
    $$switchBg: "$colors$white",
  },

  variants: {
    size: {
      xs: {
        $$switchTrackWidth: "0.375rem",
        $$switchTrackHeight: "$sizes$1",
      },
      sm: {
        $$switchTrackWidth: "1.375rem",
        $$switchTrackHeight: "$sizes$3",
      },
      md: {
        $$switchTrackWidth: "1.875rem",
        $$switchTrackHeight: "$sizes$4",
      },
      lg: {
        $$switchTrackWidth: "2.875rem",
        $$switchTrackHeight: "$sizes$6",
      },
    },
    color: {
      primary: {
        $$switchThumbBg: "$colors$logoText",
      },
      secondary: {
        $$switchThumbBg: "$colors$logoText",
      },
      success: {
        $$switchThumbBg: "$colors$logoText",
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  size: "$$switchTrackHeight",
  backgroundColor: "$$switchThumbBg",
  borderRadius: "inherit",
  boxShadow: "$$switchThumbShadow",
  transition: "transform 100ms cubic-bezier(0.22, 1, 0.36, 1)",
  willChange: "transform",

  '&[data-state="checked"]': {
    transform: "translateX($$switchThumbX)",
  },
});

type SwitchVariants = VariantProps<typeof StyledSwitch>;
type SwitchPrimitiveProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitive.Root
>;
type SwitchProps = SwitchPrimitiveProps & SwitchVariants & { css?: CSS };

export const Switch = React.forwardRef<
  React.ElementRef<typeof StyledSwitch>,
  SwitchProps
>((props, forwardedRef) => (
  <StyledSwitch {...props} ref={forwardedRef}>
    <StyledThumb />
  </StyledSwitch>
));

Switch.displayName = "Switch";
