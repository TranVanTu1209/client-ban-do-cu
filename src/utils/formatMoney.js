export const formatMoney = (value) => {
  value = value.toString();
  if (value.length > 9) {
    return `${value.slice(0, value.length - 9)},${value.slice(
      value.length - 9,
      value.length - 6
    )},${value.slice(value.length - 6, value.length - 3)},${value.slice(
      value.length - 3
    )}.00`;
  }
  if (value.length > 6) {
    return `${value.slice(0, value.length - 6)},${value.slice(
      value.length - 6,
      value.length - 3
    )},${value.slice(value.length - 3)}.00`;
  }
  if (value.length > 3) {
    return `${value.slice(0, value.length - 3)},${value.slice(
      value.length - 3
    )}.00`;
  }
  return `${value}.00`;
};
