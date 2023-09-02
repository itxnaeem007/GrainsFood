import { CSS, styled, VariantProps } from "@/theme/stitches.config";
import clsx from "clsx";
import React from "react";

const InputGroup = styled("div", {
  $$inputBorderRadius: "$radii$xlg",
  $$inputBorderColor: "$colors$placeholderBorder",
  $$inputBlueBorder: "$colors$connectInput",
  $$inputPaddingInline: "$space$5",
  $$focusBorderColor: "$colors$blue500",
  $$errorBorderColor: "$colors$red500",
  position: "relative",
  display: "flex",
  borderRadius: "$radii$xlg",
  mt: "5px",
  fontWeight: "$regular",
  outline: "none",
  justifyContent: "center",
  alignItems: "center",
  color: "$inputPlaceholder",

  variants: {
    size: {
      xs: {
        fontSize: "$xs",
        height: "43px",
        $$contentSize: "$space$12",
      },
      sm: {
        fontSize: "$sm",
        height: "$8",
        $$contentSize: "$space$8",
        $$inputBorderRadius: "$radii$sm",
        $$inputPaddingInline: "$space$3",
      },
      md: {
        fontSize: "$md",
        height: "$10",
        $$contentSize: "$space$10",
      },
      lg: {
        fontSize: "$lg",
        height: "$12",
        $$contentSize: "$space$12",
      },
      xl: {
        fontSize: "$lg",
        // height: "$51", too much height
        height: "$12",
        $$contentSize: "$space$12",
      },
    },
    outline: {
      gray: {
        border: "1px solid $$inputBorderColor",
      },
      blue: {
        border: "1px solid $$inputBlueBorder",
      },
    },
  },
  defaultVariants: {
    size: "md",
    outline: "gray",
  },
});

export const StyledInput = styled("input", {
  position: "relative",
  appearance: "none",
  margin: "0",
  height: "100%",
  width: "100%",
  minWidth: 0,
  outline: "none", // mayabe make this global reset?
  paddingInline: "$$inputPaddingInline",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  borderRadius: "$$inputBorderRadius",
  transitionProperty: "background-color,border-color,color,box-shadow",
  transitionDuration: "200ms",
  backgroundColor: "transparent",
  color: "$textGray5",

  "&::placeholder": {
    color: "$inputPlaceholder",
    fontSize: "$xs",
  },

  "&:disabled, &[data-disabled]": {
    pointerEvents: "none",
    background: "$disabledInput",
    color: "$gray400",
    // opacity: 0.4,
  },

  "&.has-label--left": {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  "&.has-label--right": {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  "&.has-content--left": {
    paddingInlineStart: "$$contentSize",
  },
  "&.has-content--right": {
    paddingInlineEnd: "$$contentSize",
  },

  variants: {
    variant: {
      outline: {
        borderColor: "$$inputBorderColor",
        "&:hover": {
          borderColor: "$$inputBorderColor",
        },
      },
      filled: {
        backgroundColor: "transparent",
        "&:hover": {
          borderColor: "$$inputBorderColor",
        },
      },
    },
    invalid: {
      true: {
        borderWidth: "2px",
        borderColor: "$$errorBorderColor",
        "&:hover": {
          borderColor: "$$errorBorderColor",
        },
      },
    },
  },

  defaultVariants: {
    variant: "outline",
  },
});

const InputAddon = styled("span", {
  display: "flex",
  alignItems: "center",
  flex: "0 0 auto",
  backgroundColor: "$gray100",
  border: "1px solid",
  borderColor: "$gray200",
  borderRadius: "$$inputBorderRadius",
  paddingInline: "$$inputPaddingInline",

  "&.input-label--left": {
    marginInlineEnd: -1,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderInlineEndColor: "transparent",
  },
  "&.input-label--right": {
    marginInlineStart: -1,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderInlineStartColor: "transparent",
  },
});

const InputElement = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 0,
  zIndex: 2,

  "&.input-content--left": {
    left: 0,
    size: "$$contentSize",
  },
  "&.input-content--right": {
    ".eye-icon": {
      fontSize: "22px",
    },
    right: 0,
    top: -1,
    size: "$$contentSize",
    h: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "size"> &
  VariantProps<typeof StyledInput> & {
    size?: VariantProps<typeof InputGroup>["size"];
    outline?: VariantProps<typeof InputGroup>["outline"];
    labelLeft?: string | React.ReactNode;
    labelRight?: string | React.ReactNode;
    contentLeft?: React.ReactNode;
    contentRight?: React.ReactNode;
    contentClickable?: boolean;
    css?: CSS;
  };

export const Input = React.forwardRef<React.ElementRef<"input">, InputProps>(
  (props, forwardedRef) => {
    const {
      css,
      size,
      outline,
      labelLeft,
      labelRight,
      contentLeft,
      contentRight,
      ...rest
    } = props;

    const inputClassName = clsx({
      "has-content--right": !!contentRight,
      "has-content--left": !!contentLeft,
      "has-label--right": !!labelRight,
      "has-label--left": !!labelLeft,
    });

    return (
      <InputGroup css={css} size={size} outline={outline}>
        {labelLeft && (
          <InputAddon className="input-label--left">{labelLeft}</InputAddon>
        )}
        {contentLeft && (
          <InputElement className="input-content--left">
            {contentLeft}
          </InputElement>
        )}
        <StyledInput ref={forwardedRef} className={inputClassName} {...rest} />
        {contentRight && (
          <InputElement className="input-content--right">
            {contentRight}
          </InputElement>
        )}
        {labelRight && (
          <InputAddon className="input-label--right">{labelRight}</InputAddon>
        )}
      </InputGroup>
    );
  }
);

Input.displayName = "Input";
