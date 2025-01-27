const express = require('express');
const connectDB = require('./config/db');
const menuRoutes = require('./routes/menuRoutes');
const foodRoutes = require("./routes/foodRouters")
const cors = require("cors")

const app = express();

// Connect to database

connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/menu', menuRoutes);
app.use('/api/food', foodRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
// const express = require('express');
// const connectDB = require('./config/db');
// const menuRoutes = require('./routes/menuRoutes');
// const foodRoutes = require('./routes/foodRouters');
// const cors = require('cors');

// const app = express();

// // Connect to database
// connectDB();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use('/api/menu', menuRoutes);
// app.use('/api/food', foodRoutes);

// // Export the app for Vercel
// module.exports = app;
