import { globalCss, keyframes } from "./stitches.config";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const globalStyles = globalCss({
  html: {
    $$navbarHeight: "81px",
    boxSizing: "border-box",
  },
  "*, *::after, *::before": {
    borderWidth: 0,
    borderStyle: "solid",
    boxSizing: "inherit",
  },
  body: {
    backgroundColor: "$bodyBg",
    color: "$bodyText",
    fontFamily: "$poppins",
    lineHeight: "$base",
    fontFeatureSettings: "kern",
    transitionProperty: "backgroundColor",
    transitionDuration: "$normal",
  },
  a: {
    backgroundColor: "transparent",
    color: "inherit",
    textDecoration: "inherit",
  },
  "b, strong": {
    fontWeight: "$bold",
  },
  small: {
    fontSize: "80%",
  },
  "sub, sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline",
  },
  sub: {
    bottom: "-0.25em",
  },
  sup: {
    top: "-0.5em",
  },
  "img, video": {
    maxWidth: "100%",
    height: "auto",
  },
  img: {
    borderStyle: "none",
  },
  "body, h1, h2, h3, h4, h5, h6, p": {
    margin: 0,
  },
  "ol, ul": {
    margin: 0,
    padding: 0,
  },
  "button, input, optgroup, select, textarea": {
    color: "inherit",
    fontFamily: "inherit",
    fontSize: "100%",
    lineHeight: "inherit",
    padding: 0,
    outline: "none",
  },
  'button, [role="button"]': {
    cursor: "pointer",
  },
  table: {
    borderCollapse: "collapse",
  },
  ".sr-only": {
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
  },
  ".loading-animation": {
    animation: `${spin} 1s infinite linear`,
  },

  'input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button':
    {
      WebkitAppearance: "none",
      MozAppearance: "none",
      appearance: "none",
      margin: "0",
    },
  ".menu-height": {
    maxHeight: "300px !important",
  },
  ".menu2-height": {
    maxHeight: "200px !important",
  },
});
