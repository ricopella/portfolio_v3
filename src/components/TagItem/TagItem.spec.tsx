import React from 'react'
import renderer from 'react-test-renderer'
import TagItem from './index'
import { render } from '@testing-library/react'

describe('<TagItem />', () => {
  it('should match TagItem snapshot', () => {
    const internalTree = renderer
      .create(<TagItem title="Wu-Tang Clan" />)
      .toJSON()

    expect(internalTree).toMatchSnapshot()
  })

  it('should render children', () => {
    const { getByText } = render(<TagItem title="Wu-Tang Clan" />)

    expect(getByText(/Wu-Tang Clan/i)).toBeTruthy()
  })
})
