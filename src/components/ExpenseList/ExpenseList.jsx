import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

import "./ExpenseList.css";

function ExpenseList(props) {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Expenses not found</h2>;
    }
    
    return (
        <ul className="expenses-list">
        {props.items.map(function (expense) {
            return (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                expenseAmount={expense.amount}
                expenseDate={expense.date}
            />
            );
        })}
        </ul>
    );
}

export default ExpenseList;
