import React from 'react'
import renderer from 'react-test-renderer'
import { PureHeading as Heading } from './index'

describe('<Heading />', () => {
  const props = {
    name: ['foo', 'bar'],
  }

  it('should match Heading snapshot', () => {
    const internalTree = renderer.create(<Heading {...props} />).toJSON()

    expect(internalTree).toMatchSnapshot()
  })
})
