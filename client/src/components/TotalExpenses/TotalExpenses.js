// src/components/TotalExpenses/TotalExpenses.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TotalExpenses.css'; // Import your CSS file

const TotalExpenses = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchTotalExpenses = async () => {
      try {
        const response = await axios.get('http://localhost:9002/expenses');
        const expenses = response.data;

        // Check if expenses is an array and not empty
        if (Array.isArray(expenses) && expenses.length > 0) {
          // Calculate total amount using reduce
          const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
          setTotalAmount(total);
        } else {
          // If expenses is not an array or is empty, set total to 0
          setTotalAmount(0);
        }
      } catch (error) {
        console.error('Error fetching total expenses:', error.message);
      }
    };

    fetchTotalExpenses();
  }, []); // Run the effect only once on component mount

  return (
    <div className="total-expenses">
      <h2>Total Expenses</h2>
      <p>Total Amount: ₹{totalAmount}</p>
    </div>
  );
};

export default TotalExpenses;
