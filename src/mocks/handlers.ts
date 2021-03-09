import { rest } from 'msw'
import { buildPost } from './generate'

export const handlers = [
  rest.get('/posts', (req, res, ctx) => {
    return res(
      ctx.json(
        Array(5)
          .fill(null)
          .map(() => buildPost()),
      ),
    )
  }),
]
