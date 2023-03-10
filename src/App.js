import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { useState } from 'react';


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
