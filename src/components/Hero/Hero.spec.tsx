import Hero from './index'
import React from 'react'
import renderer from 'react-test-renderer'

describe('<Hero />', () => {
  it('should match Hero snapshot', () => {
    const internalTree = renderer.create(<Hero />).toJSON()

    expect(internalTree).toMatchSnapshot()
  })
})
