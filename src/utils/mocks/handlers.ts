import { rest } from 'msw'

export const handlers = [rest.get('/api/users', (req, res, ctx) => res(ctx.json({})))]
