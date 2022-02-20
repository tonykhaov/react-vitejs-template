import { render, screen } from '@utils/test/app-test-utils'
import App from '@src/App'

test('should render App with Homepage first', () => {
  render(<App />)
  expect(screen.getByRole('heading', { name: /Homepage/i })).toBeInTheDocument()
})
