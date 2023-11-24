// ExpenseList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ExpenseList.css'; // Import the CSS file
import TotalExpenses from '../TotalExpenses/TotalExpenses'; // Import the TotalExpenses component

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('http://localhost:9002/expenses');
        setExpenses(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching expenses:', error.message);
      }
    };

    fetchExpenses();
  }, []); // Run the effect only once on component mount

  const refetchExpenses = async () => {
    try {
      const response = await axios.get('http://localhost:9002/expenses');
      setExpenses(response.data);
    } catch (error) {
      console.error('Error refetching expenses:', error.message);
    }
  };

  const handleDeleteExpense = async (expenseId) => {
    try {
      await axios.delete(`http://localhost:9002/expenses/${expenseId}`);
      console.log('Expense deleted:', expenseId);
      refetchExpenses();
      // Remove the deleted expense from the state
    //   setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense._id !== expenseId));
    } catch (error) {
      console.error('Error deleting expense:', error.message);
    }
  };

  return (
    <div className="ExpenseList">
      <TotalExpenses expenses={expenses} /> {/* Add TotalExpenses component */}
      <h2>Expense List</h2>
      {loading ? (
        <p className="loading-message">Loading expenses...</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense._id} className="expense-item">
              <strong>{expense.name}</strong>
              <br />
              Amount: ₹{expense.amount}
              <br />
              Date: {new Date(expense.date).toLocaleDateString()}
              <br />
              Category: {expense.category}
              <br />
              Description: {expense.description}
              <br />
              <button className='delete-btn' onClick={() => handleDeleteExpense(expense._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
