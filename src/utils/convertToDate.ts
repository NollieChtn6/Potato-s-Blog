const convertToDate = (timestamp: string) => {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return formattedDate;
};

export default convertToDate;
