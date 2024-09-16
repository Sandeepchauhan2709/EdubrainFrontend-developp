import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RoutesContainer from './routes'
import type { JSX } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <RoutesContainer />
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  )
}
export default App
