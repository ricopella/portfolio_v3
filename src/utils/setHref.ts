/**
 * Utility function that will take a string, add `#` in front
 * and if word-break will replace break with `-`
 *
 * Used to set the HREF of an A link using the title
 *
 * @param {string} value
 * @returns {string}
 */
const setHref = (value: string): string =>
  value.length > 0 ? `#${value.replace(' ', '-')}` : ''

export default setHref
