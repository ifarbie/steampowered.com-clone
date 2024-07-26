export const formatPrice = (price) => {
  if (!price) return price;
  return `Rp ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
};
