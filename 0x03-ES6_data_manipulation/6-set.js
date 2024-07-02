/**
 * Converts an array to a Set.
 * If the input is not an array, throws an error.
 *
 * @param {any} arr - The input to convert to a Set.
 * @returns {Set} The resulting Set.
 * @throws {TypeError} If the input is not an array.
 */
export default function setFromArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array');
  }
  return new Set(arr);
}
