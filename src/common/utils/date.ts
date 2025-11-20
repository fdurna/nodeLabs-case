export const formatDate = (isoDate: string, locale: string = 'en-US'): string => {
    const date = new Date(isoDate);
    return date.toLocaleString(locale, {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  