export const numberToArray = (number) =>
  Array(number)
    .fill()
    .map((_, index) => index + 1);
