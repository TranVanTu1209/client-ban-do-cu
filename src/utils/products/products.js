
export const formatProductTitle = (value, numOfWords = 7) => {
  const wordsArr = value.trim().split(' ');
  if (wordsArr.length > numOfWords)
    return wordsArr.slice(0, numOfWords).join(' ') + '...';
  return value;
}

export const calculateReductionPercentage = (price, originPrice) => {
  return '-' + Math.round(((originPrice - price) / originPrice) * 100) + '%';
}
