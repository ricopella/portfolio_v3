import MenuItem from './index'
import React from 'react'
import renderer from 'react-test-renderer'

describe('<MenuItem />', () => {
  const props = {
    item: 'foo',
  }

  it('should match MenuItem snapshot', () => {
    // @ts-ignore
    const internalTree = renderer.create(<MenuItem {...props} />).toJSON()

    expect(internalTree).toMatchSnapshot()
  })
})
