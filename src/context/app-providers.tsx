import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

type AppProvidersProps = {
  children: React.ReactNode
}

function AppProviders({ children }: AppProvidersProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default AppProviders
