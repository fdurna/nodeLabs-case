export const formatMoney = (
    amount: any,
    currency: any,
    locale: string = "tr-TR"
  ) => {
    try {
      return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount);
    } catch (error) {
      return `${amount} ${currency}`;
    }
  };
  