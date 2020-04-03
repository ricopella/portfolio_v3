import renderer from 'react-test-renderer'
import React from 'react'
import ToggleSwitch from './index'
import { render, fireEvent } from '@testing-library/react'

describe('<ToggleSwitch />', () => {
  const props = {
    currentView: 'foo',
    views: ['foo', 'bar'],
    setView: () => null,
  }
  it('should match ToggleSwitch snapshot', () => {
    const internalTree = renderer.create(<ToggleSwitch {...props} />).toJSON()

    expect(internalTree).toMatchSnapshot()
  })

  it('should show the views provided', () => {
    const { getByText } = render(<ToggleSwitch {...props} />)

    expect(getByText(/foo/i)).toBeTruthy()
    expect(getByText(/bar/i)).toBeTruthy()
  })

  it('should handle clicking the toggle', () => {
    const spy = jest.fn()
    const { getByText } = render(<ToggleSwitch {...props} setView={spy} />)

    fireEvent.click(getByText(/bar/i))

    expect(spy).toHaveBeenCalledTimes(1)
  })
})
