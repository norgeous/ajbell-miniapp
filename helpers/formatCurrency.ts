const currencySymbols = {
  GBX: '£',
};

const formatCurrency = (
  amount: number,
  currencyId: keyof typeof currencySymbols = 'GBX',
) => `${currencySymbols[currencyId]}${amount.toFixed(2)}`;

export default formatCurrency;
