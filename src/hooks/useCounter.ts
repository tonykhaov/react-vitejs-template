import * as React from 'react'

type UseCounterArgs = { initialCount?: number; step?: number }

function useCounter({ initialCount = 0, step = 1 }: UseCounterArgs) {
  const [count, setCount] = React.useState(initialCount)

  const increment = () => setCount((c) => c + step)
  const decrement = () => setCount((c) => c - step)

  return {
    count,
    increment,
    decrement,
  }
}

export default useCounter
