import * as React from 'react'
import { Switch, Route, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const size = {
  width: 480,
  height: 320,
}

function Routes() {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </AnimatePresence>
  )
}

function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: '20%', transition: { duration: 0.8 } }}
    >
      <div className="flex">
        <Link to="/about">
          <div
            className="overflow-hidden"
            style={{ width: size.width, height: size.height }}
          >
            <img
              className="w-full transition transform hover:scale-125"
              src="https://source.unsplash.com/random/800x600"
            />
          </div>
        </Link>
        <Link to="/about">
          <div
            className="overflow-hidden"
            style={{ width: size.width, height: size.height }}
          >
            <img
              className="w-full transition transform hover:scale-125"
              src="https://source.unsplash.com/random/800x600"
            />
          </div>
        </Link>
        <Link to="/about">
          <div
            className="overflow-hidden"
            style={{ width: size.width, height: size.height }}
          >
            <img
              className="w-full transition transform hover:scale-125"
              src="https://source.unsplash.com/random/800x600"
            />
          </div>
        </Link>
      </div>
      <motion.p
        initial={{ y: '-100%', opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.8, duration: 0.8 },
        }}
      >
        PLEASE SELECT AN IMAGE
      </motion.p>
    </motion.div>
  )
}

function About() {
  return (
    <div className="flex flex-col items-center my-16">
      <Link to="/">
        <motion.div
          initial={{
            opacity: 0.2,
          }}
          animate={{
            opacity: 1,
            y: '-10%',
            transition: { duration: 0.8 },
            width: size.width * 1.2,
            height: size.height * 1.2,
          }}
          className="overflow-hidden"
          style={{ width: size.width, height: size.height }}
        >
          <img
            className="w-full transition transform hover:scale-125"
            src="https://source.unsplash.com/random/800x600"
          />
        </motion.div>
      </Link>
      <motion.p
        initial={{ opacity: 0, y: '-100%' }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.4, duration: 0.8 },
        }}
      >
        HELLO WORLD WELCOME TO MY GALLERY
      </motion.p>
    </div>
  )
}
export default Routes
