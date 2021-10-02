import { useState } from 'react';
import "./ExpenseItmes.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItems(props) {
  //   const today = new Date();
  //   const expenseDate =
  //     today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  //   const expenseAmount = "$294.67";
  //   const expenseTitle = "Car Insurance";
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('Updated!')
  };

  return (
    <Card className="expense-item">
      <ExpenseDate dates={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>

      <button onClick={clickHandler}>change title</button>
    </Card>
  );
}

export default ExpenseItems;
