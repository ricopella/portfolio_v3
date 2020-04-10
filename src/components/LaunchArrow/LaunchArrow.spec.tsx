import LaunchArrow from './index'
import React from 'react'
import renderer from 'react-test-renderer'

describe('<LaunchArrow />', () => {
  it('should match LaunchArrow snapshot', () => {
    const internalTree = renderer
      .create(<LaunchArrow href="foo.com" />)
      .toJSON()

    expect(internalTree).toMatchSnapshot()
  })
})
