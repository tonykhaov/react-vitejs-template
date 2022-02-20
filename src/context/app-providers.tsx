import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function AppProviders({ children }: React.PropsWithChildren<React.ReactNode>) {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export { queryClient }
export default AppProviders
