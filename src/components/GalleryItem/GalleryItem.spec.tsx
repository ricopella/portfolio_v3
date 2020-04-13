import GalleryItem from './index'
import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'

describe('<GalleryItem />', () => {
  const props = {
    alt: 'Portfolio: test',
    description: 'this is a test item',
    href: 'test.com',
    filename: null,
    myTitle: 'Tester',
    tech: ['renderer', 'react'],
    title: 'King Tester',
    year: '2020',
  }

  it('should match GalleryItem snapshot', () => {
    // @ts-ignore
    const internalTree = renderer.create(<GalleryItem {...props} />).toJSON()

    expect(internalTree).toMatchSnapshot()
  })

  it('should render children', () => {
    // @ts-ignore
    const { getByText } = render(<GalleryItem {...props} />)

    expect(getByText(/this is a test item/i)).toBeTruthy()
    expect(getByText(/renderer/i)).toBeTruthy()
    expect(getByText(/react/i)).toBeTruthy()
    expect(getByText(/King Tester/i)).toBeTruthy()
    expect(getByText(/2020/i)).toBeTruthy()
  })
})
