import { render, screen, waitForElementToBeRemoved } from '@src/utils/test/app-test-utils'
import Query from '@src/components/Query'

test('renders Query with a loading text first and then the content', async () => {
  render(<Query />)
  await screen.findByText(/e/gi)
})
