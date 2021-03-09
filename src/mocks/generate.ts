import faker from 'faker'

function buildPost() {
  return {
    id: faker.random.uuid(),
    title: faker.lorem.sentence(),
    content: faker.lorem.sentences(),
  }
}

export { buildPost }
