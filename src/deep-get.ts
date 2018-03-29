/**
 * Get an item from an object using separator notation.
 *
 * @typeparam {T}
 * @param {any} target
 * @param {string} key
 * @param {string} separator
 * @return {T}
 */
export function deepGet<T>(target: any, key: string, separator: string = '.'): T {
  if (target == null) {
    return target;
  }

  const idx = key.indexOf(separator);
  if (idx < 0) {
    return target[key];
  }

  return deepGet(target[key.slice(0, idx)], key.slice(idx + 1), separator);
}
