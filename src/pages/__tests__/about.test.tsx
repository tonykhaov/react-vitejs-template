import { render, screen } from '@utils/test/app-test-utils'
import About from '@pages/about'

test('should render About page', () => {
  render(<About />)
  expect(screen.getByText(/about/i)).toBeInTheDocument()
})
