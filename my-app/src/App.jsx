import React, { useState } from "react";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
function App() {
  const [transactions, setTransactions] = useState([]);

  return (
    <div>
      <h1 className="header">Transaction Tracker</h1>
      <Balance transactions={transactions} />
      <TransactionForm setTransactions={setTransactions} transactions={transactions} />
      <TransactionList transactions={transactions} setTransactions={setTransactions} />
    </div>
  );
}
export default App;