import { useReducer } from 'react'
import { Button } from 'ui'

export function App() {
  const [count, increment] = useReducer((count: number) => count + 1, 0)

  return (
    <div>
      <h2>web</h2>
      <div>
        <p>Count is {count}</p>
        <Button onClick={() => increment()}>increment</Button>
      </div>
    </div>
  )
}
