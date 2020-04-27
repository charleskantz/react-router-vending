import React from 'react';
import './App.css';
import VendingMachine from './VendingMachine';
import Pizza from './Pizza';
import Chips from './Chips';
import Jaeger from './Jaeger';
import NavBar from './NavBar';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path='/'>
          <VendingMachine />
        </Route>
        <Route exact path='/chips'>
          <Chips />
          <h3>insert into chip page test</h3>
        </Route>
        <Route exact path='/pizza'>
          <Pizza />
        </Route>
        <Route exact path='/jaeger'>
          <Jaeger />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
