export const calculatePages = (totalElements, numOfDisplayedElements) => {
  return Math.ceil(totalElements / numOfDisplayedElements);
};
