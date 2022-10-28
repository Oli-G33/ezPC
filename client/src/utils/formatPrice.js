export const formatPrice = price =>
  new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(price);
