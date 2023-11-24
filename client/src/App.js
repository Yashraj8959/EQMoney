import './App.css';
import React from 'react';
import ExpenseTracking from './components/ExpenseTracking/ExpenseTracking';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import TripManagement from './components/TripManagement/TripManagement';
import ExpenseSettlement from './components/ExpenseSettlement/ExpenseSettlement';
// import ContributionSplitting from './components/ContributionSplitting/ContributionSplitting';
// import ReportsAndAnalytics from './components/ReportsAndAnalytics/ReportsAndAnalytics';
import CurrencyConversion from './components/CurrencyConversion/CurrencyConversion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useState} from 'react';

function App() {
  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
            {/* user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} /> */}
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/expense-tracking" element={<ExpenseTracking loginuser={user}/>} />
          <Route path="/trip-management" element={<TripManagement loginuser={user}/>} />
          <Route path="/settle-expenses" element={<ExpenseSettlement loginuser={user}/>} />
          {/* <Route path="/contributionsplitting" element={<ContributionSplitting loginuser={user}/>} /> */}
          {/* <Route path="/reportsandanalytics" element={<ReportsAndAnalytics loginuser={user}/>} /> */}
          <Route path="/currencyconversion" element={<CurrencyConversion loginuser={user}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
