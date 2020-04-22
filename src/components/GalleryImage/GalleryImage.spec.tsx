import createFixtureImageSharp from '../../fixtures/createFixtureImageSharp'
import React from 'react'
import renderer from 'react-test-renderer'
import { PureGalleryImage as GalleryImage } from './index'

describe('<GalleryImage />', () => {
  const props = {
    alt: 'Portfolio: test',
    imageSizes: createFixtureImageSharp('foobar'),
  }

  it('should match GalleryImage snapshot', () => {
    const internalTree = renderer.create(<GalleryImage {...props} />).toJSON()

    expect(internalTree).toMatchSnapshot()
  })
})
