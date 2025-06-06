const express = require('express');
const connectDB = require('./config/db');
const menuRoutes = require('./routes/menuRoutes');
const foodRoutes = require("./routes/foodRouters")

const cors = require("cors")
const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/menu', menuRoutes);
app.use('/api/food', foodRoutes);

const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
