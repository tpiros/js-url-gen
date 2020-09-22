/**
 * Sort a map by key
 * @private
 * @param map <string, unknown>
 * @Return array of map's values sorted by key
 */
function mapToSortedArray<T>(map: Map<string, T>): T[] {
  const array = Array.from(map.entries()).sort();

  return array.map((v) => v[1]);
}

/**
 * Checks if `value` is a string.
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} `true` if `value` is a string, else `false`.
 */
function isString(value: unknown): boolean {
  return (typeof value === 'string' || value instanceof String);
}

/**
 * Checks if text is an expression
 * @private
 * @param text
 */
function isExpression(text: unknown): boolean {
  return text.toString().match(/\s/) !== null;
}

export {
  isString,
  isExpression,
  mapToSortedArray
};
