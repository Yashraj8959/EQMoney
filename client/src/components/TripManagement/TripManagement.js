// src/pages/TripManagement.js
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import TripForm from '../TripForm/TripForm';
import TripList from '../TripList/TripList';

const TripManagement = () => {
  return (
    <div>
      <h1>Trip Management</h1>
      {/* <nav>
        <NavLink to="/trip-management/add" activeClassName="active-link">
          Add Trip
        </NavLink>
        <NavLink to="/trip-management/list" activeClassName="active-link">
          Trip List
        </NavLink>
      </nav>
      <Routes>
        <Route path="add" element={<TripForm />} />
        <Route path="list" element={<TripList />} />
      </Routes> */}
      <TripForm></TripForm>
      <TripList></TripList>
    </div>
  );
};

export default TripManagement;
