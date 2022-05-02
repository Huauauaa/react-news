import React, { useRef } from 'react'
import Child from './Child'

const Parent = () => {
  const ChildRef = useRef()
  return (
    <div>
      Parent
      <Child ref={ChildRef} />
    </div>
  )
}

export default Parent
