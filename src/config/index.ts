//enum
export enum ThemeEnum {
  LIGHT = "theme-default",
  DARK = "dark-theme",
}

export enum TradeType {
  BUY = "buy",
  SELL = "sell",
}

export enum STATUS_ENUM {
  OFFLINE = "Offline",
  ONLINE = "Online",
}

export function countWords(str: string) {
  if (str.trim() === "") {
    return 0;
  }
  return str.length;
}

const colorList = [
  "#F2D24A",
  "#FF0000",
  "#030185",
  "#307967",
  "#029637",
  "#000000",
  "#030185",
  "#38ADF6",
  "#0137A3",
  "#C94E49",
];

export function getRandomColorWithConstraints(previousColor: string) {
  let availableColors = colorList.filter((color) => color !== previousColor);

  if (previousColor) {
    const prevIndex = colorList.indexOf(previousColor);
    if (prevIndex > 0) {
      availableColors = availableColors.filter(
        (_, index) => index !== prevIndex - 1
      );
    }
    if (prevIndex < colorList.length - 1) {
      availableColors = availableColors.filter(
        (_, index) => index !== prevIndex + 1
      );
    }
  }
  const randomIndex = Math.floor(Math.random() * availableColors.length);
  return availableColors[randomIndex];
}

export enum FAQS_POS {
  SEND = "SEND",
  RECEIVE = "RECEIVE",
  DASHBOARD = "DASHBOARD",
  MAIN = "MAIN",
  P2P = "P2P",
}

export const PAGE_ERRORS = {
  ERR_NETWORK: "ERR_NETWORK",
  401: 401,
  403: 403,
  404: 404,
  429: 429,
  500: 500,
  502: 502,
  503: 503,
  504: 504,
};
