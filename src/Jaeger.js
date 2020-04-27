import React from 'react';
import { Link } from 'react-router-dom'

function Jaeger() {
  return (
    <div>
      <h1>Jaeger TIME!</h1>
      <Link exact to='/'>Try another snack</Link>
    </div>
  )
}

export default Jaeger;