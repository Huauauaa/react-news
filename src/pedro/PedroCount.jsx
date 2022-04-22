import React, { useState } from 'react'

function PedroCount() {
  const [count, setCount] = useState(0)
  const onClick = () => {
    setCount((c) => c + 1)
  }
  return (
    <>
      {count}
      <button onClick={onClick}>+</button>
    </>
  )
}

export default PedroCount
