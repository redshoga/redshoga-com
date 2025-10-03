export const formatDate = (date: Date) => {
  return date.toLocaleDateString("ja-JP", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
};
