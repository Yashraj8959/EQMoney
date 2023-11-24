// server/routes/expenses.js
import express from 'express';
import Expense from '../models/Expense.js';
const router = express.Router();

// Get all expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new expense
router.post('/', async (req, res) => {
  const expense = new Expense({
    amount: req.body.amount,
    category: req.body.category,
    description: req.body.description,
    date: req.body.date,
  });

  try {
    const newExpense = await expense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    console.error('Error adding expense:', error);
    res.status(500).json({ error: 'An error occurred while adding the expense' });
  }
});

router.delete('/:id', async (req, res) => {
    const expenseId = req.params.id;
    console.log('Deleting expense with ID:', expenseId);
  
    // Rest of the deletion logic
    try {
        const deletedExpense = await Expense.findByIdAndDelete(expenseId);
        if (!deletedExpense) {
            return res.status(404).json({ message: 'No expense with that ID' });
            }
            res.json({ message: 'Expense deleted' });
            } catch (error) {
                console.error('Error deleting expense:', error);
                res.status(500).json({ error: 'An error occurred while deleting the expense' });
                }
                });
                
  
// module.exports = router;
export default router;
