import { rest } from 'msw'
import { buildPost } from './generate'
import type { Post } from '@src/types/post'

export const handlers = [
  rest.get<undefined, Post[]>('/posts', (req, res, ctx) => {
    return res(
      ctx.json(
        Array(5)
          .fill(null)
          .map(() => buildPost()),
      ),
    )
  }),
]
