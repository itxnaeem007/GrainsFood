import React from "react";
import { styled, CSS, VariantProps } from "@/theme/stitches.config";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as LabelPrimitive from "@radix-ui/react-label";
import { useController } from "react-hook-form";

const Label = styled(LabelPrimitive.Root, {
  position: "relative",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: "$2",
});

export const RadioGroup = styled(RadioGroupPrimitive.Root, {
  display: "flex",
  gap: "$4",
  marginBottom: "$4",
  alignItems: "center",
  "@md": {
    marginBottom: "0",
    gap: "$6",
  },
});

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: "block",
  width: "10px",
  height: "10px",
  borderRadius: "inherit",
  backgroundColor: "$bodyBg",
});

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  userSelect: "none",
  appearance: "none",
  padding: 0,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  borderWidth: 2,
  borderColor: "rgb(226, 232, 240)",
  backgroundColor: "$bodyBg",
  borderRadius: "$full",
  color: "$fg",
  overflow: "hidden",

  "&:focus-visible": {
    boxShadow: "$outline",
  },

  '&[data-state="checked"]': {
    borderColor: "$primary4",
    backgroundColor: "$primary4",
  },

  variants: {
    size: {
      sm: {
        width: "$3",
        height: "$3",
      },
      md: {
        width: "$4",
        height: "$4",
      },
      lg: {
        width: "$6",
        height: "$6",
      },
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

type RadioVariants = VariantProps<typeof StyledRadio>;
type RadioGroupItemPrimitiveProps = React.ComponentProps<
  typeof RadioGroupPrimitive.Item
>;
type RadioProps = RadioGroupItemPrimitiveProps & RadioVariants & { css?: CSS };

export const Radio = React.forwardRef<
  React.ElementRef<typeof StyledRadio>,
  RadioProps
>(({ children, ...rest }, forwardedRef) => (
  <Label>
    <StyledRadio {...rest} ref={forwardedRef}>
      <StyledIndicator />
    </StyledRadio>
    {children}
  </Label>
));

export const ControlledRadioGroup = React.forwardRef(
  (props: any, forwardedRef) => {
    const { name, rules, defaultValue, control, children, ...rest } = props;
    const { field } = useController({
      control,
      name,
      defaultValue,
      rules,
    });
    return (
      <RadioGroup
        ref={forwardedRef}
        value={field.value}
        onValueChange={field.onChange}
        {...rest}
      >
        {children}
      </RadioGroup>
    );
  }
);
Radio.displayName = "Radio";

Radio.displayName = "Radio";
