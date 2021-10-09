import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";


function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    // console.log(`log from Expense.js selected year :\n ${selectedYear}`);
  };
  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
        />
       <ExpensesList sortedData={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expense;
