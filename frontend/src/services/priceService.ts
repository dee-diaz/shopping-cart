const DEFAULT_PRICE = 11;

export function getDisplayPrice(lowestPrice: number): number {
  const margin = 20;

  if (lowestPrice == null) return margin + DEFAULT_PRICE;

  return Math.round(lowestPrice) + margin;
}
