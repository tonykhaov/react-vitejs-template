import * as React from 'react'
import ReactDOM from 'react-dom'
import AppProviders from '@src/context/app-providers'
import App from '@src/App'
import 'tailwindcss/tailwind.css'
import { worker } from '@src/utils/mocks/browser'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
)
