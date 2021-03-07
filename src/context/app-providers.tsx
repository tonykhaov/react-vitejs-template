import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient()

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
