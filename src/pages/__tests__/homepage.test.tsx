import { render, screen } from '@utils/test/app-test-utils'
import Homepage from '@pages/homepage'

test('should render Homepage page', () => {
  render(<Homepage />)
  expect(screen.getByText(/homepage/i)).toBeInTheDocument()
})
