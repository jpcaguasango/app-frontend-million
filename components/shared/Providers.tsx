'use client'

import { Provider } from '@/components/chakra-snippets/provider'
import { Toaster } from '@/components/chakra-snippets/toaster'
import GlobalModal from '@/components/shared/GlobalModal'
import ModalProvider from '@/context/ModalContext'
import { queryClient } from '@/lib/queryClient.lib'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <ModalProvider>
          {children}
          <Toaster />
          <GlobalModal />
        </ModalProvider>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
