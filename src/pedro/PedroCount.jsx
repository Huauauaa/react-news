import React, { useState } from 'react'

function PedroCount() {
  const [count, setCount] = useState(0)
  const onClick = () => {
    setTimeout(() => {
      setCount((c) => c + 1)
    }, 1e3)
  }

  const onClick1 = () => {
    setTimeout(() => {
      setCount(count + 1)
    }, 1e3)
  }
  return (
    <>
      {count}
      <button onClick={onClick}>setCount((c) => c + 1)</button>
      <button onClick={onClick1}>setCount(count + 1)</button>
    </>
  )
}

export default PedroCount
