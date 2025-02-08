export const formatPrice = (price: number, type: "yearly" | "monthly") => {
  return `$${price}/${type === "yearly" ? "yr" : "mo"}`
}
