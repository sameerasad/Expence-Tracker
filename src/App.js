import React from 'react';
import './App.css';
import Header from './Header'
import Balance from './Balance'
import ExpenceContainer from './ExpenceContainer';
import History from './History';


function App() {
  return (
    <div className="container">  
     <Header />
     <Balance />
     <ExpenceContainer />
     <History/>
    </div>
  );
}

export default App;
