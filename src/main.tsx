import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import YupConfig from './util/YupConfig.tsx'
import { BrowserRouter } from 'react-router-dom'
import MyThemeProvider from './layout/MyThemeProvider.tsx'
import { UserProvider } from './util/auth/UserInfoProvider.tsx'
import { AuthProvider } from './util/auth/AuthProvider.tsx'
import { Toaster } from 'sonner'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <UserProvider>
            <YupConfig>
              <MyThemeProvider>
                <App />
                <Toaster position='top-right' duration={5000} invert richColors />
              </MyThemeProvider>
            </YupConfig>
          </UserProvider>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
