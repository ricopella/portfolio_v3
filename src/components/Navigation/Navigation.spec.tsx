import React from 'react'
import renderer from 'react-test-renderer'
import { motion } from 'framer-motion'
import { PureNavigation as Navigation } from './index'
import { render } from '@testing-library/react'

describe('<Navigation />', () => {
  it('should match Navigation snapshot', () => {
    const internalTree = renderer
      .create(
        <motion.nav animate={'closed'}>
          <Navigation headerItems={[]} />
        </motion.nav>
      )
      .toJSON()

    expect(internalTree).toMatchSnapshot()
  })
})
