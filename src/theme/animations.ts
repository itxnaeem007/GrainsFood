import { keyframes } from "./stitches.config";

const slideFromLeft = keyframes({
  "0%": { transform: "translateX(-100%)", opacity: "0" },
  "100%": { transform: "translateX(0)", opacity: "1" },
});

export const slideFromRight = keyframes({
  "0%": { transform: "translateX(100%)", opacity: "0" },
  "100%": { transform: "translateX(0)", opacity: "1" },
});

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(22px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "scale(.80)" },
  "100%": { opacity: 1, transform: "scale(1)" },
});

export {
  slideFromLeft,
  slideUpAndFade,
  slideRightAndFade,
  slideDownAndFade,
  slideLeftAndFade,
  overlayShow,
  contentShow,
};
