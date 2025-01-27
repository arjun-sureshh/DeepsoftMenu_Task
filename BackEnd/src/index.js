const express = require('express');
const connectDB = require('./config/db'); // DB connection file
const menuRoutes = require('./routes/menuRoutes'); // Correct path to menuRoutes
const foodRoutes = require('./routes/foodRoutes'); // Correct path to foodRoutes
const cors = require('cors');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/menu', menuRoutes); // Menu routes
app.use('/api/food', foodRoutes); // Food routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
