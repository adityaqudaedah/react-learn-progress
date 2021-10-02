import React from "react";

import Expense from './components/Expenses/Expense'
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // return React.createElement('div', {},
  //   React.createElement('h2', {}, "let 's get started!")
  // ,React.createElement(Expense,{data:expense}))

  return (
    <div>
      <NewExpense />
      <Expense data={expense} />
    </div>
  );
}

export default App;