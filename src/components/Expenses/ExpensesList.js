import React from "react";
import not_found from "../../img/not_found.svg";
import ExpenseItems from "./ExpenseItems";

const ExpensesList = (props) => {
  const notFoundContent = (
    <div className="expenses_not_found">
      <img src={not_found} alt="" /> <p>Expenses not found here...</p>
    </div>
  );

  if (props.sortedData.length === 0) {
    return notFoundContent;
  }

  return (
    <ul className="expenses-list">
      {props.sortedData.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
