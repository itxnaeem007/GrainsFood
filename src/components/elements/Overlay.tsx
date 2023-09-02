import { overlayShow } from "@/theme";
import { styled, css } from "@/theme/stitches.config";

export const overlayStyles = css({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9999, // use z-index from theme
  backgroundColor: "$blackAlpha400",
  width: "100vw",
  height: "100vh",
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const Overlay = styled("div", overlayStyles);
