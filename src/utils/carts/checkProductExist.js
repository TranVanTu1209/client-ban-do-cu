export const checkExist = (id, arr) => {
  return arr.findIndex(item => item.id === id) > -1;
}