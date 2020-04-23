import React, { CSSProperties, FC } from 'react'
import { motion } from 'framer-motion'
import { SLIDE_IN_ANIMATION_OPTIONS } from '../../styles/variables'

const SlideUpElement: FC<{ style?: CSSProperties }> = ({
  children,
  style = {},
}) => (
  <motion.div style={style} {...SLIDE_IN_ANIMATION_OPTIONS}>
    {children}
  </motion.div>
)

export default SlideUpElement
