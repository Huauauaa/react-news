import React, { useState, forwardRef, useImperativeHandle } from 'react'

// const ButtonChild = forwardRef((props, ref) => {
//   const [visible, setVisible] = useState(true)

//   useImperativeHandle(ref, () => {
//     return {
//       switch: onToggle,
//     }
//   })

//   const onToggle = () => {
//     setVisible((val) => !val)
//   }
//   return (
//     <>
//       <button onClick={onToggle}>ButtonChild</button>
//       {visible ? 'show' : 'hidden'}
//     </>
//   )
// })

// export default ButtonChild

const ButtonChild = (props, aaaaaaaaaaaaa) => {
  const [visible, setVisible] = useState(true)

  useImperativeHandle(aaaaaaaaaaaaa, () => {
    return {
      switch: onToggle,
    }
  })

  const onToggle = () => {
    setVisible((val) => !val)
  }
  return (
    <>
      <button onClick={onToggle}>ButtonChild</button>
      {visible ? 'show' : 'hidden'}
    </>
  )
}

export default forwardRef(ButtonChild)
