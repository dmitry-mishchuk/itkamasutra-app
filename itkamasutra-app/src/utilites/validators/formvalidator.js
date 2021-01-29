export const requaredField = (value) => {
  if (value) { return undefined; }
  return "field is requared";
}
export const maxLength = (maxValue) => value => {
  if (value && value.length > maxValue) { return `Max symbol > ${maxValue} symbol` }
  return undefined;
}
