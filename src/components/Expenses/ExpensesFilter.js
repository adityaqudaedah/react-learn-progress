import React from "react";
import './ExpensesFilter.css'
const ExpenseFilter = (props) => {

  const dropDownChange = (event) => {
    props.onChangeFilter(event.target.value)
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="">filter by year</label>
        <select value={props.selected} onChange={dropDownChange} >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
