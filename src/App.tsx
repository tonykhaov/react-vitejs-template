import clsx from 'clsx'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Homepage from '@pages/homepage'
import About from '@pages/about'
import Fetch from '@pages/fetch'

function App() {
  return (
    <>
      <NavBar />
      <div className="flex min-h-[45vh] flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/fetch" element={<Fetch />} />
        </Routes>
      </div>
    </>
  )
}

function NavBar() {
  const { pathname } = useLocation()
  return (
    <nav className="border-2 py-4">
      <ul className="flex justify-center gap-8">
        <li>
          <Link
            to="/"
            className={clsx('p-2 hover:text-blue-500', {
              'border-4 border-blue-400 text-blue-700': pathname === '/',
            })}
          >
            Go to homepage
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={clsx('p-2 hover:text-blue-500', {
              'border-4 border-blue-400 text-blue-700': pathname === '/about',
            })}
          >
            Go to about
          </Link>
        </li>
        <li>
          <Link
            to="/fetch"
            className={clsx('p-2 hover:text-blue-500', {
              'border-4 border-blue-400 text-blue-700': pathname === '/fetch',
            })}
          >
            Go to fetch
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default App
