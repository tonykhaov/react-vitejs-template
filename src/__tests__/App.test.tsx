import { render, screen, userEvent, act } from '@utils/test/app-test-utils'
import App from '@src/App'

test('should render App with Homepage first and navigate through pages', () => {
  // @testing-library/user-event v14 doesn't trigger a rerender.
  // eventually fix this issue and remove the act() calls.

  render(<App />)
  // start with Homepage
  expect(screen.getByRole('heading', { name: /Homepage/i })).toBeInTheDocument()

  // navigate to About page
  act(() => userEvent.click(screen.getByRole('link', { name: /go to about/i })))
  expect(screen.getByRole('heading', { name: /About/i })).toBeInTheDocument()

  // navigate to Fetch page
  act(() => userEvent.click(screen.getByRole('link', { name: /go to fetch/i })))
  expect(screen.getByRole('heading', { name: /fetch/i })).toBeInTheDocument()

  // navigate to Homepage page
  act(() => userEvent.click(screen.getByRole('link', { name: /go to homepage/i })))
  expect(screen.getByRole('heading', { name: /Homepage/i })).toBeInTheDocument()
})
