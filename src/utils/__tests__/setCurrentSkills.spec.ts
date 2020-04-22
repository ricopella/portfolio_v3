import setCurrentSkills from '../setCurrentSkills'

describe('Utils - setCurrentSkills', () => {
  const expectedFixture = [
    {
      title: 'sleeping',
      percent: 100,
    },
    {
      title: 'barking',
      percent: 40,
    },
  ]
  const fixture = [
    {
      title: 'foo',
      items: [],
    },
    {
      title: 'mya',
      items: expectedFixture,
    },
  ]

  it('should return the sub skills of mya', () => {
    expect(setCurrentSkills(fixture, 'mya')).toEqual(expectedFixture)
  })

  it('should return an empty array', () => {
    expect(setCurrentSkills(fixture, 'bar')).toEqual([])
  })
})
