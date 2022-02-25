import { Routes, Route, Link } from 'react-router-dom'
import Homepage from '@pages/homepage'
import About from '@pages/about'

function App() {
  return (
    <>
      <nav>
        <ul className="flex justify-center gap-8">
          <li className="border border-black p-8">
            <Link to="/">Go to homepage</Link>
          </li>
          <li className="border border-black p-8">
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
