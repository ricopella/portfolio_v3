import React, { FC } from 'react'

const DATA_SAL = [`slide-up`, `slide-left`, `slide-right`]
const DATA_SAL_DELAY = `200`
const DATA_SAL_EASING = `ease`

/**
 * Simple component that can wrap a Page component, and will add
 * an animation to the page's content once the page enters the viewport.
 *
 * Leverages `gatsby-plugin-scroll-reveal`
 *
 * @param {{}} { children }
 */
const ScrollReveal: FC<{}> = ({ children }) => (
  <div
    data-sal={DATA_SAL[0]}
    data-sal-delay={DATA_SAL_DELAY}
    data-sal-easing={DATA_SAL_EASING}
  >
    {children}
  </div>
)
export default ScrollReveal
