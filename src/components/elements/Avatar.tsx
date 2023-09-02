import React from "react";
import { styled, VariantProps, CSS } from "@/theme/stitches.config";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { Box } from "./Box";

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  flexShrink: 0,
  position: "relative",
  border: "none",
  fontFamily: "inherit",
  lineHeight: "1",
  margin: "0",
  outline: "none",
  padding: "0",
  fontWeight: "500",
  height: "fit-content",
  width: "fit-content",

  variants: {
    size: {
      "1": {
        width: "$3",
        height: "$3",
      },
      "2": {
        width: 51,
        height: 51,
      },
      "3": {
        width: "$6",
        height: "$6",
      },
    },
    shape: {
      square: {
        borderRadius: "$2",
      },
      circle: {
        borderRadius: "50%",
      },
    },
  },
  defaultVariants: {
    size: "2",
    shape: "circle",
  },
});

const StyledAvatarImage = styled(AvatarPrimitive.Image, {
  display: "flex",
  objectFit: "cover",
  boxSizing: "border-box",
  height: "100%",
  verticalAlign: "middle",
  width: "100%",
});

const StyledAvatarFallback = styled(AvatarPrimitive.Fallback, {
  textTransform: "uppercase",

  variants: {
    size: {
      "1": {
        fontSize: "10px",
        lineHeight: "15px",
      },
      "2": {
        fontSize: "$3",
      },
      "3": {
        fontSize: "$6",
      },
      "4": {
        fontSize: "$7",
      },
      "5": {
        fontSize: "$8",
      },
      "6": {
        fontSize: "$9",
      },
    },
  },
  defaultVariants: {
    size: "2",
  },
});

type AvatarVariants = VariantProps<typeof StyledAvatar>;
type AvatarPrimitiveProps = React.ComponentProps<typeof AvatarPrimitive.Root>;
type AvatarOwnProps = AvatarPrimitiveProps &
  AvatarVariants & {
    css?: CSS;
    alt?: string;
    src?: string;
    fallback?: React.ReactNode;
  };

export const Avatar = React.forwardRef<
  React.ElementRef<typeof StyledAvatar>,
  AvatarOwnProps
>(({ alt, src, fallback, size, shape, css, ...props }, forwardedRef) => {
  return (
    <Box css={css}>
      <StyledAvatar {...props} ref={forwardedRef} size={size} shape={shape}>
        <StyledAvatarImage alt={alt} src={src} />
        <StyledAvatarFallback size={size}>{fallback}</StyledAvatarFallback>
      </StyledAvatar>
    </Box>
  );
});

Avatar.displayName = "Avatar";
