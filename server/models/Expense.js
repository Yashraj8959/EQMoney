// server/models/Expense.js
import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    },
});

// module.exports = mongoose.model('Expense', expenseSchema);
const Expense = mongoose.model('Expense', expenseSchema);

export default Expense;