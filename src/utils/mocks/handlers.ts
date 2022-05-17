import { rest } from 'msw'
import { faker } from '@faker-js/faker'
import { userFactory } from '@mocks/factories/user'

export const handlers = [
  rest.get('https://my-backend.com/api/users', (req, res, ctx) =>
    res(ctx.json(userFactory.buildList(faker.datatype.number({ min: 3, max: 5 }))))
  ),
]
