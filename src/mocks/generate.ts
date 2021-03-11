import faker from 'faker'
import type { Post } from '@src/types/post'

function buildPost(): Post {
  return {
    id: faker.random.uuid(),
    title: faker.lorem.sentence(),
    content: faker.lorem.sentences(),
  }
}

export { buildPost }
