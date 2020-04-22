import createFixtureAuthorMetaData from '../../fixtures/createFixtureAuthorMetaData'
import React from 'react'
import renderer from 'react-test-renderer'
import { PureLayout as Layout } from './index'
import { render } from '@testing-library/react'

describe('<Layout />', () => {
  const props = {
    author: createFixtureAuthorMetaData(),
  }
  it('should match Layout snapshot', () => {
    const internalTree = renderer
      .create(
        <Layout {...props}>
          <div>Wu-Tang Clan</div>
        </Layout>
      )
      .toJSON()

    expect(internalTree).toMatchSnapshot()
  })

  it('should render children', () => {
    const { getByText } = render(
      <Layout {...props}>
        <div>Wu-Tang Clan</div>
      </Layout>
    )

    expect(getByText(/Tom Brady/i)).toBeTruthy()
    expect(getByText(/Wu-Tang Clan/i)).toBeTruthy()
  })
})
