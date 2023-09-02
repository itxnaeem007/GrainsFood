import React, { ReactNode } from "react";
import { styled, type CSS } from "@/theme/stitches.config";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from "@/theme";

const Provider = TooltipPrimitive.Provider;
const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: "$md",
  padding: "$2 $4",
  backgroundColor: "#7E8C9F",
  opacity: "1",
  w: "300px",
  color: "$white",
  lineHeight: "0px",

  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },

  variants: {
    multiline: {
      true: {
        maxWidth: 250,
        pb: 7,
      },
      false: {
        maxWidth: "fit-content",
        pb: 7,
      },
    },
  },
});

const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: "#7E8C9F",
  width: 11,
  height: 5,
});

type TooltipPrimitiveProps = React.ComponentProps<typeof TooltipPrimitive.Root>;
type TooltipProps = TooltipPrimitiveProps & {
  children: React.ReactElement;
  content: ReactNode;
  multiline?: boolean;
  css?: CSS;
};

export function Tooltip({
  children,
  content,
  multiline,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration,
  disableHoverableContent,
  ...props
}: TooltipProps) {
  const rootProps = {
    open,
    defaultOpen,
    onOpenChange,
    delayDuration,
    disableHoverableContent,
  };

  return (
    <Provider>
      <TooltipPrimitive.Root {...rootProps}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <StyledContent
            side="top"
            align="center"
            sideOffset={5}
            {...props}
            multiline={multiline}
          >
            {content}
            <TooltipArrow />
          </StyledContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </Provider>
  );
}

// example usage
export const ExampleTooltip = () => {
  return (
    <Tooltip content="This is a tooltip">
      <button>Hover me</button>
    </Tooltip>
  );
};
