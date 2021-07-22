import * as React from 'react'
import ReactDOM from 'react-dom'
import 'tailwindcss/tailwind.css'
import AppProviders from './context/app-providers'
import App from './App'
import { worker } from './mocks/browser'
import { BrowserRouter as Router } from 'react-router-dom'

// if (process.env.NODE_ENV === 'development') {
//   worker.start()
// }

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <Router>
        <App />
      </Router>
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root'),
)
