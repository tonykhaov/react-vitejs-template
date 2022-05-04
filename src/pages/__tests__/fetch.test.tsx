import { render, screen, waitFor } from '@utils/test/app-test-utils'
import Fetch from '@pages/fetch'
import { server, rest } from '@src/utils/mocks/server'
import { generateUser } from '@src/utils/mocks/generate/user'
import type { User } from '@src/types/user'

describe('should render Fetch page', () => {
  it('should display loading message and then list of users', async () => {
    // make sure you're using node v18

    const randomUsers = [generateUser()]
    server.use(
      rest.get<User[]>('https://my-backend.com/api/users', (req, res, ctx) => {
        console.log('this msw endpoint does not intercept fetch calls made in node v18')
        return res(ctx.json(randomUsers))
      })
    )

    // but fetch calls made to endpoints other than endpoints mocked by msw work (uncomment to see)
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then((res) => res.json())
    //   .then((data) => console.log('I got this data', data))

    render(<Fetch />)

    expect(screen.getByText(/fetch/i)).toBeInTheDocument()
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument())

    const [firstUser] = randomUsers
    expect(screen.getByText(firstUser.name)).toBeInTheDocument()
    expect(screen.getByText(firstUser.email)).toBeInTheDocument()
    expect(screen.getByText(firstUser.password)).toBeInTheDocument()
  })
})
