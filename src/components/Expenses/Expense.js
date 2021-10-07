import React, { useState } from "react";

import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(`log from Expense.js selected year :\n ${selectedYear}`);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
        />

        {props.data.map(expense => 
          <ExpenseItems
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )}
      </Card>
    </div>
  );
}

export default Expense;
