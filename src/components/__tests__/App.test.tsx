import { render, screen } from '@testing-library/react'
import App from '@src/components/App'

test('renders App with react lab text', () => {
  render(<App />)
  expect(screen.getByText(/react lab/i)).toBeInTheDocument()
})
