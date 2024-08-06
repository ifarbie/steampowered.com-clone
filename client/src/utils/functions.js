export const formatPrice = (price) => {
  if (!price) return `Rp 0`;
  return `Rp ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
};

export const discountedPrice = (discountValue, normalPrice) => {
  return normalPrice - ((discountValue / 100) * normalPrice);
};

export const formatDate = (isoString) => {
  const date = new Date(isoString);
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const [month, day, year] = formattedDate.replace(",", "").split(" ");
  return `${day} ${month}, ${year}`;
};