import React, { useRef } from 'react'
import ButtonChild from './ButtonChild'

const ButtonParent = () => {
  const buttonRef = useRef(null)

  const toggle = () => {
    buttonRef.current.switch()
  }
  return (
    <>
      <button onClick={toggle}>parent button</button>
      <ButtonChild ref={buttonRef}></ButtonChild>
    </>
  )
}

export default ButtonParent
