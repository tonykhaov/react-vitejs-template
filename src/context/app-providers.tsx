import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient()

// TODO find the best type to make rtlRender work
export default function AppProviders({ children }: any) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
