// src/components/TripList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./TripList.css";

const TripList = () => {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchTrips = async () => {
        try {
          const response = await axios.get('http://localhost:9002/trips');
          setTrips(response.data);
          setLoading(false); // Set loading to false once data is fetched
        } catch (error) {
          console.error('Error fetching trips:', error.message);
        }
      };
  
      fetchTrips();
    }, []);
    // Run the effect only once on component mount
  
    if (loading) {
      return <p>Loading...</p>;
    }

  return (
    <div>
      <h2>Trip List</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip._id}>
            <strong>{trip.name}</strong>
            <br />
            Date: {new Date(trip.date).toLocaleDateString()}
            <br />
            Participants: {trip.participants.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripList;
