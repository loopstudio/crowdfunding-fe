export const formatSelectOptions = (rawData) => {
  if (!rawData) return [];

  return rawData.map((el) => ({ value: el.address, name: el.symbol }));
};
