import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card'
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
    console.log(props);
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        {filteredExpenses.length === 0 ? (<p>No Expenses Found!</p>) : (
        filteredExpenses.map((exp)=>(
        <ExpenseItem 
        key={exp.id}
        title={exp.title} amount={exp.amount} date={exp.date}/>)))}
      </Card>
    </div>
  );
};

export default Expenses;