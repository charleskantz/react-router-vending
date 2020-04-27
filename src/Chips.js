import React from 'react';
import { Link } from 'react-router-dom'

function Chips() {
  return (
    <div>
      <h1>Chips TIME!</h1>
      <Link exact to='/'>Try another snack</Link>
    </div>
  )
}

export default Chips;