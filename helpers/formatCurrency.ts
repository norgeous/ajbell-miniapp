const currencyNormalise = {
  GBX: 'GBP',
};

const formatCurrency = (amount: number, currencyId: string = 'GBP') =>
  new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency:
      currencyNormalise[currencyId as keyof typeof currencyNormalise] ||
      currencyId,
  }).format(amount);

export default formatCurrency;
