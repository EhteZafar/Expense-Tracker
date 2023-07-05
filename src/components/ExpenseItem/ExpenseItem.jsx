import React from 'react';

import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';

function ExpenseItem(props) {

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.expenseDate} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
