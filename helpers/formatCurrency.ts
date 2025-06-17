const currencySymbols = {
  GBX: '£',
  YEN: '¥',
};

export type CurrencyType = keyof typeof currencySymbols;

// todo use intl formatter

const formatCurrency = (amount: number, currencyId: CurrencyType = 'GBX') =>
  `${currencySymbols[currencyId]}${amount.toFixed(2)}`;

export default formatCurrency;
