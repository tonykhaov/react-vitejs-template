import { render, screen } from '@utils/test/app-test-utils'
import App from '@src/App'

test('should render App with Homepage first and navigate through pages', async () => {
  const { user } = render(<App />)

  // start with Homepage
  expect(screen.getByRole('heading', { name: /Homepage/i })).toBeInTheDocument()

  // navigate to About page
  user.click(screen.getByRole('link', { name: /go to about/i }))
  expect(await screen.findByRole('heading', { name: /About/i })).toBeInTheDocument()

  // navigate to Fetch page
  user.click(screen.getByRole('link', { name: /go to fetch/i }))
  expect(await screen.findByRole('heading', { name: /fetch/i })).toBeInTheDocument()

  // navigate to Homepage page
  user.click(screen.getByRole('link', { name: /go to homepage/i }))
  expect(await screen.findByRole('heading', { name: /Homepage/i })).toBeInTheDocument()
})
