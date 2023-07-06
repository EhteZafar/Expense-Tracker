import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {


    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
    };

    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
    };

    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
    };

    function SubmitHandler(event) {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };


  return <form onSubmit={SubmitHandler}>
    <h2 className="heading-form">Add New Expense</h2>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={enteredDate} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
        </div>
    </div>
    <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
    </div>
  </form>
};

export default ExpenseForm;