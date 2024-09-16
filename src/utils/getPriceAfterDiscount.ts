export const getPriceAfterDiscount = (
  price: number = 0,
  discount: number = 0
): number => {
  return Number(price) - (Number(price) * Number(discount)) / 100
}
