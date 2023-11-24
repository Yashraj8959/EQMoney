// server/routes/trips.js
// console.log('Importing Trip model');
import express from 'express';
import Trip from '../models/Trip.js';
const router = express.Router();

// Get all trips
router.get('/', async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new trip
router.post('/', async (req, res) => {
  const trip = new Trip({
    name: req.body.name,
    date: req.body.date,
    participants: req.body.participants,
  });

  try {
    const newTrip = await trip.save();
    res.status(201).json(newTrip);
  } catch (error) {
    console.error('Error adding trip:', error);
    res.status(500).json({ error: 'An error occurred while adding the trip' });
  }
});

export default router;
