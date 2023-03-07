import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { useState } from 'react';
import Receipt1 from './Receipt1';
import Receipt2 from './Receipt2';
import Receipt3 from './Receipt3';

function App(props) {
  return (
   
    <div className="main">
      <Header/>
       <div className="container">
       <div className="order1"> Karolin</div>
       <div className="order2"> Mark</div>
       <div className="order3"> Matt</div>
       </div>
    </div>
  );
}

export default App;
