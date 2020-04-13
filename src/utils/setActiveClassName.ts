/**
 * Utility function used to compare a selected item to the current item
 *
 * if True, will set the value to `active1
 *
 * else will return ``
 */
export default (selected: string, curr: string): string =>
  selected === curr ? `active` : ``
