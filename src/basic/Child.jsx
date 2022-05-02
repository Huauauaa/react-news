import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Child = React.memo(
  forwardRef(({ name }, ref) => {
    return <div>Child-{name || 'none'}</div>
  }),
)

Child.propTypes = {
  name: PropTypes.string,
}

Child.defaultProps = {
  name: 'default',
}

export default Child
