import { rest } from 'msw'

export const handlers = [
  rest.get('/login', (req, res, ctx) => {
    return res(ctx.json({ data: true }))
  }),
]
