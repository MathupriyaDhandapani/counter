"use client";
import { useState } from 'react'
import React from 'react'

function Counter() {

  const [count, setCount] = useState(0)

  return (
    <>
      <b >Counter</b>
      <div>{count}</div>
      <button  onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button disabled={count==0} onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
    </>
  )
}

export default Counter