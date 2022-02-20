import { Routes, Route, Link } from 'react-router-dom'
import Homepage from '@pages/homepage'
import About from '@pages/about'

function App() {
  return (
    <>
      <nav>
        <ul className="flex gap-8 justify-center">
          <li className="p-8 border border-black">
            <Link to="/">Go to homepage</Link>
          </li>
          <li className="p-8 border border-black">
            <Link to="/about">Go to about</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App
