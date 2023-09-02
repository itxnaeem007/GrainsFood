import React from "react";
import { styled, CSS, VariantProps } from "@/theme/stitches.config";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@chakra-ui/icons";
import { useController } from "react-hook-form";

const CheckboxRoot = styled(CheckboxPrimitive.Root, {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  appearance: "none",
  lineHeight: "1",
  backgroundColor: "transparent",
  borderWidth: "2px",
  borderColor: "$gray200",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  overflow: "hidden",
  minWidth: "$2",
  outline: "none",
  borderRadius: "0px",
  "&:hover": {
    boxShadow: "inset 0 0 0 1px $colors$slate8",
  },
  "&:focus-visible": {
    boxShadow: "$outline",
  },

  variants: {
    size: {
      sm: {
        size: "$3",
      },
      md: {
        size: "$4",
      },
      lg: {
        size: "$5",
      },
      xl: {
        size: "$6",
      },
    },
    color: {
      primary: {
        border: "1px solid $priceText",
        '&[data-state="checked"]': {
          backgroundColor: "$white",
          borderColor: "$priceText",
        },
      },
      secondary: {
        border: "1px solid $borderColor1",
        '&[data-state="checked"]': {
          backgroundColor: "$white",
          borderColor: "$borderColor1",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$priceText",
  size: "100%",
  svg: {
    w: "10px",
    h: "10px",
  },
});

type CheckboxPrimitiveProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
>;
type CheckboxVariants = VariantProps<typeof CheckboxRoot>;
type CheckboxProps = Omit<CheckboxPrimitiveProps, "children"> &
  CheckboxVariants & { css?: CSS };

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxRoot>,
  CheckboxProps
>((props, forwardedRef) => (
  <CheckboxRoot {...props} ref={forwardedRef}>
    <CheckboxIndicator>
      {/* replace check icon if needed */}
      <CheckIcon />
    </CheckboxIndicator>
  </CheckboxRoot>
));

export const ControlledCheckBox = (props: any) => {
  const { name, rules, defaultValue, control, value, children, ...rest } =
    props;
  const { field } = useController({
    control,
    name,
    defaultValue,
    rules,
  });
  return (
    <Checkbox
      checked={Boolean(field.value)}
      onCheckedChange={(e) => {
        if (value) {
          field.onChange(e ? value : "");
        } else {
          field.onChange(e);
        }
      }}
      {...rest}
    >
      {children}
    </Checkbox>
  );
};

Checkbox.displayName = "Checkbox";
