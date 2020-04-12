import Page from './index'
import React from 'react'
import renderer from 'react-test-renderer'
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
        <Page {...props} title="Wu-Tang Clan">
          <div>Foo</div>
        </Page>
      )
      .toJSON()

    expect(internalTree).toMatchSnapshot()
  })

  it('should render children', () => {
    const { getByText } = render(
      <Page {...props} title="Wu-Tang Clan">
        <div>Foo</div>
      </Page>
    )

    expect(getByText(/Wu-Tang Clan/i)).toBeTruthy()
    expect(getByText(/Foo/i)).toBeTruthy()
  })
})
