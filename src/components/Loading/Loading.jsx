import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loading() {
  return (
    <div className=' d-flex justify-content-center align-items-center'>
        <Spinner animation="border" variant="info" />
    </div>
  )
}

export default Loading
