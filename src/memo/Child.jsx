import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../components/styles/Button.styled'

function Child({ onClick, name, todoList = [] }) {
  console.log('child', name)
  return (
    <fieldset>
      <legend>{name}</legend>
      todoList:{' '}
      {todoList.map((item) => (
        <span key={item.id}>{item.text}</span>
      ))}
      <Button onClick={onClick}> child's button</Button>
    </fieldset>
  )
}

Child.propTypes = {
  onClick: PropTypes.func,
}

Child.defaultProps = {
  onClick: () => {
    console.log('onClick')
  },
}

export default React.memo(Child)
