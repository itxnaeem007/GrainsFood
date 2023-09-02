import { IFAQsResponse } from "@/service/type";

export const scrollPage = (x: number) => {
    window.scrollTo({
      top: x,
      behavior: 'smooth', // Smooth scrolling animation
    });

};

export const divideArrayInHalf = (arr: IFAQsResponse[]) => {
  const isEven = arr.length % 2 === 0;
  const middle = Math.floor(arr.length / 2);
  const oddMiddle = middle + 1;

  const firstHalf = arr.slice(0, isEven ? middle : oddMiddle);
  const secondHalf = arr.slice(isEven ? middle : oddMiddle);

  return [firstHalf, secondHalf];
};

export const NumberValidator = (value: string) => {
  return isNaN(parseFloat(value)) || parseFloat(value) === 0
    ? undefined
    : parseFloat(value);
};

export const formatDate = (d: string) => {
  const date = new Date(d);
  const yyyy = date.getFullYear();
  let mm: string | number = date.getMonth() + 1; // Months start at 0!
  let dd: string | number = date.getDate();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  const formattedDate = dd + "/" + mm + "/" + yyyy;
  return formattedDate;
};

export const getFirstFourElements = <T>(array: T[], len: number): T[] => {
  return array.slice(0, len);
};
