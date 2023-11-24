// ExpenseForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './expenseform.css'; // Import the CSS file

const ExpenseForm = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9002/expenses', {
        amount: parseFloat(amount),
        category,
        description,
        date,
      });

      console.log('Expense added:', response.data);

      setAmount('');
      setCategory('');
      setDescription('');
      setDate('');
    } catch (error) {
      console.error('Error adding expense:', error.message);
    }
  };

  return (
    <div className="expense-form-container">
      <h2 className="expense-form-title">Add Expense</h2>
      <form onSubmit={handleSubmit} className="expense-form">
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Food">Food</option>
            {/* <option value="Transportation">Transportation</option> */}
            <option value="groceries">Groceries</option>
            <option value="Entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="education">Education</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="takeaways">Takeaways</option>
            <option value="clothing">Clothing</option>  
            <option value="travelling">Travelling</option>  
            <option value="other">Other</option> 
            {/* Add more categories as needed */}
          </select>
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit" className="expense-form-button">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
