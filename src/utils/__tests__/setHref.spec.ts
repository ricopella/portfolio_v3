import setHref from '../setHref'

describe('Utils - setHref', () => {
  const inputs = ['home', 'my site', 'foobar', '']
  const assertions = ['#home', '#my-site', '#foobar', '']

  inputs.forEach((input, idx) => {
    it(`should add # in front of ${input} and split the words with a -`, () => {
      expect(setHref(input)).toEqual(assertions[idx])
    })
  })
})
