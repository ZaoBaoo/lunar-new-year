export const parseDate = (dateStr) => {
  const date = new Date(dateStr);

  return { day: date.getDate() };
};
