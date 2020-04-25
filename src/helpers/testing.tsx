import React from 'react'
import renderer from 'react-test-renderer'
import { DARK_MODE_THEME } from '../styles/variables'
import { ThemeProvider } from 'emotion-theming'

/**
 * Helper function that will add emotion's theme provider context to element
 *
 * @param {(React.ReactNode | React.ReactNode[])} element
 * @returns {(renderer.ReactTestRendererJSON | null)}
 */
export const SnapshotRenderer = (
  element: React.ReactNode | React.ReactNode[]
): renderer.ReactTestRendererJSON | null =>
  renderer
    .create(<ThemeProvider theme={DARK_MODE_THEME}>{element}</ThemeProvider>)
    .toJSON()
