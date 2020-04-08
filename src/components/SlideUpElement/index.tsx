import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { SLIDE_IN_ANIMATION_OPTIONS } from '../../styles/variables'

const SlideUpElement: FC<{}> = ({ children }) => (
  <motion.div {...SLIDE_IN_ANIMATION_OPTIONS}>{children}</motion.div>
)

export default SlideUpElement
