import React, { useEffect } from 'react'

function PedroChild() {
  useEffect(() => {
    console.log('PedroChild render')
  })
  return <div>PedroChild</div>
}

export default PedroChild
