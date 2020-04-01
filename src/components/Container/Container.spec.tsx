import renderer from 'react-test-renderer'
import React from 'react'
import Container from './index'
import { render } from '@testing-library/react'

describe('<Container />', () => {
  it('should match Container snapshot', () => {
    const internalTree = renderer
      .create(
        <Container>
          <div>Wu-Tang Clan</div>
        </Container>
      )
      .toJSON()

    expect(internalTree).toMatchSnapshot()
  })

  it('should render children', () => {
    const { getByText } = render(
      <Container>
        <div>Wu-Tang Clan</div>
      </Container>
    )

    expect(getByText(/Wu-Tang Clan/i)).toBeTruthy()
  })
})
