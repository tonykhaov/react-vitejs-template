import { render, screen } from '@src/utils/test/app-test-utils'
import App from '@src/components/App'

test('renders App with react lab text', () => {
  render(<App />)
  expect(screen.getByText(/react lab/i)).toBeInTheDocument()
})
