import renderer from 'react-test-renderer'
import React from 'react'
import TerminalCommand from './index'
import { render } from '@testing-library/react'

describe('<TerminalCommand />', () => {
  const props = {
    question: `Who?`,
    answer: `Wu-Tang Clan`,
    href: `wutang.com`,
  }

  it('should match TerminalCommand snapshot', () => {
    const internalTree = renderer
      .create(<TerminalCommand {...props} />)
      .toJSON()

    expect(internalTree).toMatchSnapshot()
  })

  it('should render question and answer', () => {
    const { getByText } = render(<TerminalCommand {...props} />)

    expect(getByText(/Wu-Tang Clan/i)).toBeTruthy()
    expect(getByText(/Who?/i)).toBeTruthy()
  })
})
