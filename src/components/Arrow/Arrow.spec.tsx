import renderer from 'react-test-renderer'
import React from 'react'
import Arrow from './index'

describe('<Arrow />', () => {
  it('should match Arrow snapshot', () => {
    const internalTree = renderer.create(<Arrow />).toJSON()

    expect(internalTree).toMatchSnapshot()
  })
})
