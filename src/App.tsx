import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Homepage from '@pages/homepage'
import About from '@pages/about'
import clsx from 'clsx'

function App() {
  return (
    <>
      <NavBar />
      <div className="flex h-[45vh] items-center justify-center">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

function NavBar() {
  const { pathname } = useLocation()
  return (
    <nav>
      <ul className="flex justify-center gap-8">
        <li>
          <Link
            to="/"
            className={clsx('hover:text-blue-500', {
              'border-b-4 border-blue-400 text-blue-700': pathname === '/',
            })}
          >
            Go to homepage
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={clsx('hover:text-blue-500', {
              'border-b-4 border-blue-400 text-blue-700': pathname === '/about',
            })}
          >
            Go to about
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default App
