import React from 'react';
import { Spinner } from 'react-bootstrap';


function LoadingSpinner() {
  return (
    <div>
          <Spinner animation="border" variant="danger" />
    </div>
  )
}

export default LoadingSpinner