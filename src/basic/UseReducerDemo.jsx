import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action) {
    case 'INCREASE':
      return { ...state, count: ++state.count }
    case 'DECREASE':
      return { ...state, count: --state.count }
    case 'SWITCH':
      return { ...state, visible: !state.visible }
    default:
      return state
  }
}

const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, visible: false })
  return (
    <fieldset>
      <legend>useReducer</legend>
      {state.count}
      <button onClick={() => dispatch('INCREASE')}>+</button>
      <button onClick={() => dispatch('DECREASE')}>-</button>
      <button onClick={() => dispatch('SWITCH')}>
        {state.visible ? 'hide' : 'show'}
      </button>
    </fieldset>
  )
}

export default UseReducerDemo
