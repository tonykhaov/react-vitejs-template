import { render, screen, waitFor } from '@utils/test/app-test-utils'
import Fetch from '@pages/fetch'
import { server, rest } from '@src/utils/mocks/server'
import { generateUser } from '@src/utils/mocks/generate/user'
import type { User } from '@src/types/user'

describe('should render Fetch page', () => {
  it('should display loading message and then list of users', async () => {
    const randomUsers = [generateUser()]
    server.use(
      rest.get<User[]>('https://my-backend.com/api/users', (req, res, ctx) =>
        res(ctx.json(randomUsers))
      )
    )
    render(<Fetch />)

    expect(screen.getByText(/fetch/i)).toBeInTheDocument()
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument())

    const [firstUser] = randomUsers
    expect(screen.getByText(firstUser.name)).toBeInTheDocument()
    expect(screen.getByText(firstUser.email)).toBeInTheDocument()
    expect(screen.getByText(firstUser.password)).toBeInTheDocument()
  })
})
