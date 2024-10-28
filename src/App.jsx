import  { useState } from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
    setBalance((prevBalance) =>
      transaction.type === 'income'
        ? prevBalance + transaction.amount
        : prevBalance - transaction.amount
    );
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">Budget Tracker</h1>
      <h3 className="text-center">Balance: ${balance.toFixed(2)}</h3>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
