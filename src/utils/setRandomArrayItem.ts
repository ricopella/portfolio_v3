/**
 * Utility function that will return a random item from an array
 *
 * @template T
 * @param {T[]} items
 * @returns {T}
 */
const setRandomArrayItem = <T>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)]

export default setRandomArrayItem
