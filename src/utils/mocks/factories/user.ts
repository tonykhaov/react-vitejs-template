import { Factory } from 'fishery'
import { faker } from '@faker-js/faker'
import type { User } from '@src/types/user'

const userFactory = Factory.define<User>((factory) => ({
  id: String(factory.sequence),
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
}))

export { userFactory }
