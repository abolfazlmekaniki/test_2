import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.tsx'
import { AppContextProvider } from './contexts/store.tsx'
import { QueryClientProvider } from 'react-query'
import { QueryClientStore } from './services/queryClient.ts'
import { IoCloseCircle } from 'react-icons/io5'
import { TiTickOutline } from 'react-icons/ti'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={QueryClientStore}>
    <AppContextProvider>
      <RouterProvider router={router}/>
      <Toaster 
      toastOptions={{
        success: {
          icon:<TiTickOutline/>,
          style: {
            background: 'green',
            color:"whitesmoke"
          },
        },
        error: {
          style: {
            background: 'red',
            color:"whitesmoke"
          },
          icon:<IoCloseCircle/>
        },
      }}
      />
    </AppContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)
