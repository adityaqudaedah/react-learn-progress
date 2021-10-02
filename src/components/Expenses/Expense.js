import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from '../UI/Card'
function Expense(props) {
  return (
    <Card className="expenses">
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
  );
}

export default Expense;
