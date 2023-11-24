// src/components/TripForm.js
import React, { useState } from 'react';
import axios from 'axios';
import "./TripForm.css";

const TripForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [participants, setParticipants] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9002/trips', {
        name,
        date,
        participants: participants.split(',').map(participant => participant.trim()),
      });

      console.log('Trip added:', response.data);

      setName('');
      setDate('');
      setParticipants('');
    } catch (error) {
      console.error('Error adding trip:', error.message);
    }
  };

  return (
    <div>
      <h2>Add Trip</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <label>
          Participants (comma-separated):
          <input
            type="text"
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Trip</button>
      </form>
    </div>
  );
};

export default TripForm;
