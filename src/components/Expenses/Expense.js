import React, { useState } from "react";

import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import not_found from "../../img/not_found.svg";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    // console.log(`log from Expense.js selected year :\n ${selectedYear}`);
  };
  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = (
    <div className="expenses_not_found">
      <img src={not_found} alt="" /> <p>Expenses not found here...</p>
    </div>
  );

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItems
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
}

export default Expense;
