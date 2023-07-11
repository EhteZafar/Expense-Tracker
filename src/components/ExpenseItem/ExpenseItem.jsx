import React from 'react';

import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';

function ExpenseItem(props) {

  function deleteExpenseHandler(event) {
    props.onDeleteExpense(event.target.value);
  }

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.expenseDate} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.expenseAmount}</div>
          <button  className='expense-item__price' onClick={deleteExpenseHandler} value={props.title}>Delete</button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
