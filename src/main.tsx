import * as React from 'react'
import ReactDOM from 'react-dom'
import 'tailwindcss/tailwind.css'
import AppProviders from './context/app-providers'
import App from './components/App'
import { worker } from './mocks/browser'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root'),
)
