import React, { useState } from 'react'
import PedroChild from './PedroChild'
import PedroCount from './PedroCount'

function PedroPage() {
  // const [count, setCount] = useState(0)
  // const onClick = () => {
  //   setCount((c) => c + 1)
  // }
  return (
    <>
      {/* {count}
      <button onClick={onClick}>+</button> */}

      {/* TIP: use component to avoid extra render */}

      <PedroCount />
      <PedroChild />
    </>
  )
}

export default PedroPage
