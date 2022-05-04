import '@testing-library/jest-dom'

// use node v18 to reproduce the bug
if (!process.version.includes('v18')) {
  const whatwgFetchPath = 'whatwg-fetch'
  import(whatwgFetchPath)
}

import { server } from '@utils/mocks/server'

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }))

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
