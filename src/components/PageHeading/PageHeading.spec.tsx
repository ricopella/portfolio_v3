import PageHeading from './index'
import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'

describe('<PageHeading />', () => {
  const props = {
    title: 'Boston Bruins',
  }

  it('should match PageHeading snapshot', () => {
    const internalTree = renderer.create(<PageHeading {...props} />).toJSON()

    expect(internalTree).toMatchSnapshot()
  })

  it('should render children', () => {
    const { getByText } = render(<PageHeading {...props} />)

    expect(getByText(/Boston Bruins/i)).toBeTruthy()
  })
})
