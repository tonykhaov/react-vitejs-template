import { render, screen } from '@utils/test/app-test-utils'
import Title from '@components/Title'
import { faker } from '@faker-js/faker'

test('should render Title with a h1 tag', () => {
  const randomText = faker.lorem.word()
  render(<Title>{randomText}</Title>)
  expect(screen.getByRole('heading', { level: 1, name: randomText })).toBeInTheDocument()
})
