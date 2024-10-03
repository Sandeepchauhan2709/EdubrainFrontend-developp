// export const getPriceAfterDiscount = (
//   price: number = 0,
//   discount: number = 0
// ): number => {
//   return Number(price) - (Number(price) * Number(discount)) / 100
// }
export const getPriceAfterDiscount = (
  price: number = 0,
  discount: number = 0
): number => {
  const discountedPrice = price - (price * discount) / 100
  return parseFloat(discountedPrice.toFixed(2)) // Limits the result to 2 decimal places
}
