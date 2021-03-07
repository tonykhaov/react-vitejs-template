import '@testing-library/jest-dom'
import { server } from '@src/mocks/server'
import { QueryCache } from 'react-query'

const queryCache = new QueryCache()

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
beforeEach(() => queryCache.clear())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
