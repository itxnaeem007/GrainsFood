export const kebabCase = (text: string) => {
  return text
    ?.replace?.(/([a-z])([A-Z])/g, "$1-$2")
    ?.replace?.(/\s+/g, "-")
    .toLowerCase?.();
};

export const includes = (text?: string, search?: string[]) => {
  return search?.some((item) => text?.includes(item));
};

export const padZero = (str: string, len?: number) => {
  len = len || 2;
  const zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
};

export const truncate = (value: string | undefined, sliceNumber = 3) => {
  return value && value?.length > 16
    ? `${value.slice(0, sliceNumber - 1)}...${value.slice(
        value.length - (sliceNumber + 2)
      )}`
    : value;
};
