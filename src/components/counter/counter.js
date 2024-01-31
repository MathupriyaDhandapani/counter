"use client";
import { useState } from 'react'
import React from 'react'

function Counter() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <b>Counter</b>
      <h2>{count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button disabled onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
    </div>
  )
}

export default Counter