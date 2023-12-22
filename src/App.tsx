import React from 'react'
import AppRoutes from '@/routes'
import { Toaster } from 'sonner'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@/lib/react-query'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
   return (
      <React.Suspense fallback={null}>
         <Router>
            <QueryClientProvider client={queryClient}>
               <AppRoutes />
            </QueryClientProvider>

            <Toaster richColors />
         </Router>
      </React.Suspense>
   )
}

export default App
