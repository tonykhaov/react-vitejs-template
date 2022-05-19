import {
  render,
  screen,
  waitFor,
  within,
  waitForElementToBeRemoved,
} from '@utils/test/app-test-utils'
import Fetch from '@pages/fetch'
import { server, rest } from '@src/utils/mocks/server'
import { userFactory } from '@src/utils/mocks/factories/user'
import type { User } from '@src/types/user'
import { faker } from '@faker-js/faker'

describe('should render Fetch page', () => {
  it('should display loading message and then the list of users with their details', async () => {
    const randomNumberOfUsers = faker.datatype.number({ min: 2, max: 10 })
    const randomUsers = userFactory.buildList(randomNumberOfUsers)

    server.use(
      rest.get<User[]>('https://my-backend.com/api/users', (req, res, ctx) =>
        res(ctx.json(randomUsers))
      )
    )

    render(<Fetch />)

    expect(screen.getByText(/fetch/i)).toBeInTheDocument()
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument())

    // we can see first user's details
    const firstUser = randomUsers[0]
    expect(screen.getByText(firstUser.name)).toBeInTheDocument()
    expect(screen.getByText(firstUser.email)).toBeInTheDocument()
    expect(screen.getByText(firstUser.password)).toBeInTheDocument()

    // the number of users in the DOM should match the number of randomUsers sent
    const usersContainer = screen.getByRole('list')
    const usersDataList = within(usersContainer).getAllByRole('listitem')
    expect(usersDataList).toHaveLength(randomUsers.length)

    // we can see last user's details
    const lastUser = randomUsers[randomUsers.length - 1] // we can use .at() but .at() returns the right type but also union undefined...
    expect(screen.getByText(lastUser.name)).toBeInTheDocument()
    expect(screen.getByText(lastUser.email)).toBeInTheDocument()
    expect(screen.getByText(lastUser.password)).toBeInTheDocument()
  })

  it('should be able to refetch new users', async () => {
    const randomUsers1 = userFactory.buildList(1)

    server.use(
      rest.get<User[]>('https://my-backend.com/api/users', (req, res, ctx) =>
        res(ctx.json(randomUsers1))
      )
    )

    const { user: userEvent } = render(<Fetch />)

    // we can see the first user of randomUsers1's details
    const firstUser1 = {
      name: await screen.findByText(randomUsers1[0].name),
      email: await screen.findByText(randomUsers1[0].email),
      password: await screen.findByText(randomUsers1[0].password),
    }
    expect(firstUser1.name).toBeInTheDocument()
    expect(firstUser1.email).toBeInTheDocument()
    expect(firstUser1.password).toBeInTheDocument()

    // prepare the backend to send randomUsers2 to replace randomUsers1
    const randomUsers2 = userFactory.buildList(1)
    server.use(
      rest.get<User[]>('https://my-backend.com/api/users', (req, res, ctx) =>
        res(ctx.json(randomUsers2))
      )
    )

    const refetchButton = screen.getByRole('button', { name: /refetch/i })
    userEvent.click(refetchButton)

    // firstUser in randomUsers1's details should be removed from the DOM
    await waitForElementToBeRemoved(firstUser1.name)
    expect(firstUser1.name).not.toBeInTheDocument()
    expect(firstUser1.email).not.toBeInTheDocument()
    expect(firstUser1.password).not.toBeInTheDocument()

    // we should now see details of the first user of randomUsers2
    const firstUser2 = {
      name: await screen.findByText(randomUsers2[0].name),
      email: await screen.findByText(randomUsers2[0].email),
      password: await screen.findByText(randomUsers2[0].password),
    }
    expect(firstUser2.name).toBeInTheDocument()
    expect(firstUser2.email).toBeInTheDocument()
    expect(firstUser2.password).toBeInTheDocument()
  })
})
