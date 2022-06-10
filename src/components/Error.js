import React from 'react'

function Error(props) {
  return (
    (<div className='alert alert-danger'>{'Error fetching data - ' + props.err}</div>)
  )
}

export default Error