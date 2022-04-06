import React from 'react';
import PropTypes from 'prop-types';

function Child({ onClick, name, todoList = [] }) {
  console.log('child', name);
  return (
    <fieldset>
      <legend>{name}</legend>
      todoList:{' '}
      {todoList.map((item) => (
        <span key={item.id}>{item.text}</span>
      ))}
      <button onClick={onClick}> child's button</button>
    </fieldset>
  );
}

Child.propTypes = {
  onClick: PropTypes.func,
};

Child.defaultProps = {
  onClick: () => {
    console.log('onClick');
  },
};

export default React.memo(Child);
