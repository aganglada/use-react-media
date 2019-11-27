import * as React from 'react'
import { render } from '@testing-library/react'
import { mockMatchMedia } from './utils'

import useMedia from '../src/useMedia'

function App() {
  const matches = useMedia('(min-width: 600px)')

  return <p>{matches ? 'Desktop' : 'Mobile'}</p>
}

test('useMedia matches Desktop when matchMedia returns true', () => {
  mockMatchMedia(true)
  const { queryByText } = render(<App />)

  expect(queryByText(/Desktop/)).toBeInTheDocument()
  expect(queryByText(/Mobile/)).not.toBeInTheDocument()
})

test('useMedia matches Mobile when matchMedia returns false', () => {
  mockMatchMedia(false)
  const { queryByText } = render(<App />)

  expect(queryByText(/Mobile/)).toBeInTheDocument()
  expect(queryByText(/Desktop/)).not.toBeInTheDocument()
})
