import {
  QueryClientProvider
}
from '@tanstack/react-query'

import {
  queryClient
}
from '../config/queryClient'

export const AppProvider =
({ children }: any) => (

  <QueryClientProvider
    client={queryClient}
  >
    {children}
  </QueryClientProvider>

)
