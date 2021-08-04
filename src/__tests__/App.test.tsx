import App from '@src/App'
import { render, screen } from '@src/utils/test/app-test-utils'

test('App.tsx', () => {
  render(<App />)
  expect(screen.getByText('REACT LAB')).toBeInTheDocument()
})
