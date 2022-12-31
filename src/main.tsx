import * as React from 'react'
import { createRoot } from 'react-dom/client'
import AppProviders from '@src/context/app-providers'
import App from '@src/App'
import 'uno.css'
import '@unocss/reset/tailwind.css'

if (process.env.NODE_ENV === 'development') {
  import('@src/utils/mocks/browser').then(({ worker }) => worker.start())
}

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
)
