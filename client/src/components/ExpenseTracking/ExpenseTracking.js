// src/components/ExpenseTracking/ExpenseTracking.js
import React from 'react';
import ExpenseForm from '../Expenseform/expenseform';
import ExpenseList from '../Expenselist/expenselist';
import TotalExpenses from '../TotalExpenses/TotalExpenses';
import Header from '../Header/Header';
import './ExpenseTracking.css'; // Import your CSS file

const ExpenseTracking = () => {
  return (
    <div >
      <Header />
      <h1>Let's track your expenses</h1>
    <div className="ExpenseTracking">
      <div className="ExpenseForm">
        <ExpenseForm />
      </div>
      <div className="ExpenseList">
        <ExpenseList />
      </div>
    </div>
    </div>
  );
};

export default ExpenseTracking;
