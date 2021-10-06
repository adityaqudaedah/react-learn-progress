import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: 'u' + Math.floor(Math.random(10,100)*10).toString()
    }
    
    props.onAddExpenseData(expenseData)
    // console.log('from NewExpense.js');
    // console.log(expenseData);
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
