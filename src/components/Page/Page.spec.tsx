import renderer from 'react-test-renderer'
import React from 'react'
import Page from './index'
import { render } from '@testing-library/react'

describe('<Page />', () => {
  const props = {
    className: 'foo',
    id: 'foo',
    style: { color: 'red' },
  }

  it('should match Page snapshot', () => {
    const internalTree = renderer
      .create(
        <Page {...props}>
          <div>Wu-Tang Clan</div>
        </Page>
      )
      .toJSON()

    expect(internalTree).toMatchSnapshot()
  })

  it('should render children', () => {
    const { getByText } = render(
      <Page {...props}>
        <div>Wu-Tang Clan</div>
      </Page>
    )

    expect(getByText(/Wu-Tang Clan/i)).toBeTruthy()
  })
})
