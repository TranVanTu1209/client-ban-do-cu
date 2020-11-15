
export const filterProduct = (text, term) => {
  if (term === '') return false;
  return text.toLowerCase().includes(term.trim().toLowerCase());
}