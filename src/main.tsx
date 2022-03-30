import * as React from 'react'
import ReactDOM from 'react-dom'
import AppProviders from '@src/context/app-providers'
import App from '@src/App'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import { worker } from '@src/utils/mocks/browser'

if (process.env.NODE_ENV === 'development') {
  // UNCOMMENT IF YOU WANT TO MOCK YOUR REQUESTS IN DEVELOPMENT MODE
  // worker.start()
}

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
)
