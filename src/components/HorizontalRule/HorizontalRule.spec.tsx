import HorizontalRule from './index'
import React from 'react'
import renderer from 'react-test-renderer'

describe('<HorizontalRule />', () => {
  it('should match HorizontalRule snapshot', () => {
    const internalTree = renderer.create(<HorizontalRule />).toJSON()

    expect(internalTree).toMatchSnapshot()
  })
})
