const setHref = (value: string): string =>
  value.length > 0 ? `#${value.replace(' ', '-')}` : ''

export default setHref
