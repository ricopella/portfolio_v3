import setActiveClassName from '../setActiveClassName'

describe(`Utils - setActiveClassName `, () => {
  const values = [
    { selectedItem: 'foo', item: 'bar' },
    { selectedItem: 'bar', item: 'bar' },
    { selectedItem: '', item: 'bar' },
  ]
  const assertions = ['', 'active', '']

  values.forEach((value, idx) => {
    it(`should return 'active' if ${value.selectedItem} === ${value.item} else should return ''`, () => {
      expect(setActiveClassName(value.selectedItem, value.item)).toEqual(
        assertions[idx]
      )
    })
  })
})
