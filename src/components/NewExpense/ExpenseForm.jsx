import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm() {

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    function titleChangeHandler(event) {
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value};
        });
    };

    function amountChangeHandler(event) {
        setUserInput((prevState) => {
            return {...prevState, enteredAmount: event.target.value};
        });
    };

    function dateChangeHandler(event) {
        setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value};
        });
    };


  return <form>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
        </div>
    </div>
    <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
    </div>
  </form>
};

export default ExpenseForm;