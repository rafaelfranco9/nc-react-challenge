export const capitalizeWord = (word) => {
  word = word.toLowerCase();
  return word.chartAt(0).toUpperCase() + word.slice(1);
};
