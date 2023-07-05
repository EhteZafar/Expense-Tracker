
import Card from '../Card/Card';  
import './Expenses.css';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import React from 'react';
import { useState } from 'react';
import ExpenseList from '../ExpenseList/ExpenseList';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    };

    const filterByYear = props.items.filter(function (expense) {
        return expense.date.getFullYear().toString() === filteredYear;
    });
            
    return (
        <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseList items={filterByYear} />    
      </Card>
    );
}  

export default Expenses;