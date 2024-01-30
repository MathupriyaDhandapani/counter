import  { useState } from 'react'
import React from 'react'

function Counter() {

  const [count, setCount] = useState(0)

  return (
    <div><h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={setCount(count + 1)}>Increment</button>
      <button disabled onClick={setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter