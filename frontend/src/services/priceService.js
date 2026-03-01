export function getDisplayPrice(lowestPrice) {
  const margin = 20;

  if (lowestPrice == null) return margin + 11;

  return Math.round(lowestPrice) + margin;
}
