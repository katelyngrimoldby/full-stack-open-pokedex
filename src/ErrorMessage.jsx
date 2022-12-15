import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid="error">A weird error occured: {error.toString()}</div>
)

export default ErrorMessage
