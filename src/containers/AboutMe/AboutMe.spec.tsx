import renderer from 'react-test-renderer'
import React from 'react'
import AboutMe from './index'
import { render } from '@testing-library/react'

describe('<AboutMe />', () => {
  it('should match AboutMe snapshot', () => {
    const internalTree = renderer.create(<AboutMe />).toJSON()

    expect(internalTree).toMatchSnapshot()
  })

  it('should render children', () => {
    const { getByText } = render(<AboutMe />)

    expect(getByText(/About Me/i)).toBeTruthy()
  })
})
