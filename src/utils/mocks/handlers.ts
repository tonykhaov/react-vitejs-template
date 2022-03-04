import { faker } from '@faker-js/faker'
import { rest } from 'msw'
import { createMultipleElements } from '@utils/helpers/create-multiple-elements'
import { generateUser } from '@mocks/generate/user'

export const handlers = [
  rest.get('https://my-backend.com/api/users', (req, res, ctx) =>
    res(ctx.json(createMultipleElements(faker.datatype.number({ min: 4, max: 6 }), generateUser)))
  ),
]
