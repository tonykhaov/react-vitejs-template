import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient()

type AppProvidersProps = {
  children: React.ReactElement
}

export default function AppProviders({ children }: AppProvidersProps) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
