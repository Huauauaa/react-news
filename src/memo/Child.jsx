import React from 'react';
import PropTypes from 'prop-types';

function Child({ onClick }) {
  console.log('child');
  return (
    <fieldset>
      <legend>child</legend>
      <button onClick={onClick}> child's button</button>
    </fieldset>
  );
}

Child.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default React.memo(Child);
