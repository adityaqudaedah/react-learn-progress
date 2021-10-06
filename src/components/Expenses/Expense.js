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

        <ExpenseItems
          title={props.data[0].title}
          amount={props.data[0].amount}
          date={props.data[0].date}
        />
        <ExpenseItems
          title={props.data[1].title}
          amount={props.data[1].amount}
          date={props.data[1].date}
        />

        <ExpenseItems
          title={props.data[2].title}
          amount={props.data[2].amount}
          date={props.data[2].date}
        />
        <ExpenseItems
          title={props.data[3].title}
          amount={props.data[3].amount}
          date={props.data[3].date}
        />
      </Card>
    </div>
  );
}

export default Expense;
