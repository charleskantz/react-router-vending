import React from 'react';
import { Link } from 'react-router-dom'

function VendingMachine() {
  return (
    <div>
      <h1>Vending Machine!</h1>
        <Link exact to='/chips'>Get Chips!</Link><br />
        <Link exact to='/pizza'>Get Pizza!</Link><br />
        <Link exact to='/jaeger'>Get Jaeger!</Link>
    </div>
  )
}

export default VendingMachine;