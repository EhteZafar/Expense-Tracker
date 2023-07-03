import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';

function ExpenseItem(props) {

  return (
    <Card className='expense-item'>
      <div>
        <ExpenseDate date={props.expenseDate} />
      </div>
      <div className='expense-item__description'>
        <h2>{props.expenseTitle}</h2>
        <div className='expense-item__price'>${props.expenseAmount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
