import React from "react";
// import { useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
import "./homepage.css"
import Header from "../Header/Header";
import { Helmet } from 'react-helmet';
import ExpenseForm from "../Expenseform/expenseform";
import ExpenseList from  '../Expenselist/expenselist';
import TotalExpenses from  '../TotalExpenses/TotalExpenses';

const Homepage = () => {
    return (
      <div>
        <Header></Header>
        <div className="content-box">
        <h1>Welcome to EQ Money</h1>
        <p>Your comprehensive expense management solution.</p>

        <div className="feature-links">
          <Link to="/expense-tracking" >Expense Tracking</Link>
          <Link to="/trip-management">Trip Management</Link>
          <Link to="/expense-settlement">Expense Settlement</Link>
          <Link to="/contribution-splitting">Contribution Splitting</Link>
          <Link to="/reports-and-analytics">Reports and Analytics</Link>
          <Link to="/currency-conversion">Currency Conversion</Link>
        </div>
        </div>


        
</div>


)
}


export default Homepage;
