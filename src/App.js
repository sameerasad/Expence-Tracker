import React from 'react';
import './App.css';
import Header from './Header'
import Balance from './Balance'
import ExpenceContainer from './ExpenceContainer';
import History from './History';
import TransactionForm from './TransactionForm';


function App() {
  return (
    <div className="container">  
     <Header />
     <Balance />
     <ExpenceContainer />
     <History/>
     <TransactionForm />
    </div>
  );
}

export default App;
