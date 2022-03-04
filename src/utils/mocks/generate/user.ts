import { faker } from '@faker-js/faker'
import type { User } from '@src/types/user'

function generateUser(): User {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }
}

export { generateUser }
