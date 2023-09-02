import React from "react";
import { styled, CSS, VariantProps, keyframes } from "@/theme/stitches.config";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});
const StyledAccordion = styled(AccordionPrimitive.Root, {
  width: "100%",
});

type AccordionPrimitiveProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
>;
type AccordionProps = AccordionPrimitiveProps & { css?: CSS };

export const Accordion = React.forwardRef<
  React.ElementRef<typeof StyledAccordion>,
  AccordionProps
>(({ children, type, value, defaultValue, ...rest }, forwardedRef) => (
  <StyledAccordion
    ref={forwardedRef}
    {...rest}
    // type={type}
    // {...(type === "single" ? { collapsible: true } : {})}
    type="single"
    collapsible
    value={value ? (value as string) : undefined}
    defaultValue={defaultValue ? (defaultValue as string) : "1"}
    onValueChange={(value) => console.log(value)}
  >
    {children}
  </StyledAccordion>
));

Accordion.displayName = "Accordion";

// type AccordionPrimitiveProps = React.ComponentPropsWithoutRef<
//   typeof AccordionPrimitive.Root
// >;
// type AccordionProps = AccordionPrimitiveProps & { css?: CSS };

// export const Accordion = React.forwardRef<
//   React.ElementRef<typeof AccordionPrimitive.Root>,
//   AccordionProps
// >(({ children, ...rest }, forwardedRef) => (
//   <StyledAccordion
//     ref={forwardedRef}
//     {...rest}
//     {...(rest.type === "single" ? { collapsible: true } : {})}
//   >
//     {children}
//   </StyledAccordion>
// ));

// Accordion.displayName = "Accordion";

export const AccordionItem = styled(AccordionPrimitive.Item, {
  overflow: "hidden",
  width: "100%",
  borderTop: "1px solid $colors$slate6",
  cursor: "pointer",
  "&:last-child": {
    borderBottom: "1px solid $colors$slate6",
  },
  "&:focus-within": {
    position: "relative",
    zIndex: 1,
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
  display: "flex",
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  boxSizing: "border-box",
  userSelect: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  p: "$3 $6",
  fontSize: "$xl",
  fontWeight: "$normal",
  color: "$bodyText",
  background: "$accordion",
  my: "$1",
  width: "100%",

  "&:focus": {
    outline: "none",
    boxShadow: "inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8",
  },

  svg: {
    transition: "transform 175ms cubic-bezier(0.65, 0, 0.35, 1)",
  },

  '&[data-state="open"]': {
    background: "$primary1",
    color: "$white",
    svg: {
      transform: "rotate(180deg)",
    },
  },
  variants: {
    variant: {
      footer: {
        bgColor: "rgba(255, 255, 255, 0.1)",
        color: "$white",
        svg: {
          size: "26px",
        },
        '&[data-state="open"]': {
          background: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  },
});

type AccordionTriggerProps = React.ComponentProps<
  typeof AccordionPrimitive.Trigger
> &
  VariantProps<typeof StyledTrigger> & { css?: CSS };

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof StyledTrigger>,
  AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <ArrowDown />
    </StyledTrigger>
  </StyledHeader>
));

AccordionTrigger.displayName = "AccordionTrigger";

export const ArrowDown = styled(ChevronDownIcon, {
  width: 26,
  height: 26,
  display: "none",
  "@md": {
    display: "block",
  },
});

export const AccordionContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
  padding: "$2",
  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },

  variants: {
    variant: {
      footer: {
        p: "8px 18px 12px",
      },
    },
  },
});
