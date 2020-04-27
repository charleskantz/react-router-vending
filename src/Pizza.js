import React from 'react';
import { Link } from 'react-router-dom'

function Pizza() {
  return (
    <div>
      <h1>PIZZA TIME!</h1>
      <Link exact to='/'>Try another snack</Link>
    </div>
  )
}

export default Pizza;