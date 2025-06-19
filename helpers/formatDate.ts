const formatDate = (date: string) =>
  new Intl.DateTimeFormat(navigator.language).format(new Date(date));

export default formatDate;
