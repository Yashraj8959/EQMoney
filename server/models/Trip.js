// server/models/Trip.js
import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  participants: [
    {
      type: String,
      required: true,
    },
  ],
});

// module.exports = mongoose.model('Trip', tripSchema);
const Trip = mongoose.model('Trip', tripSchema);

export default Trip;