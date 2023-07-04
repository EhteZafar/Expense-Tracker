import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.expenseTitle);

  function clickHandler() {
    console.log('clicked');
    setTitle('updated');
  };

  return (
    <Card className='expense-item'>
      <div>
        <ExpenseDate date={props.expenseDate} />
      </div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.expenseAmount}</div>
        <button onClick={clickHandler}>change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
