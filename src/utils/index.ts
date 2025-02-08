/**
 * Formats a price with a currency symbol and time period abbreviation.
 *
 * @param price The price as a number.
 * @param type The time period type, either "yearly" or "monthly".
 * @returns A formatted price string (e.g., "$100/yr" or "$25/mo").
 *
 * @example
 * formatPrice(100, "yearly"); // Returns "$100/yr"
 * formatPrice(25, "monthly"); // Returns "$25/mo"
 */
export const formatPrice = (price: number, type: "yearly" | "monthly") => {
  return `$${price}/${type === "yearly" ? "yr" : "mo"}`
}

/**
 * Capitalizes the first letter of a string.
 *
 * @param word The string to capitalize.
 * @returns The capitalized string.
 *
 * @example
 * capitalize("hello"); // Returns "Hello"
 * capitalize("world"); // Returns "World"
 */
export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
