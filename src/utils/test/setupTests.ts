import '@testing-library/jest-dom'
import { server } from '@src/mocks/server'
import { queryClient } from '@src/context/app-providers'
import { waitFor } from '@testing-library/react'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterEach(async () => {
  server.resetHandlers()
  queryClient.clear()
  await waitFor(() => expect(queryClient.isFetching()).toBe(0))
})
afterAll(() => server.close())
