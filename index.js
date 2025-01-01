const express = require('express');
const connectDB = require('./src/config/database');
// const authRoutes = require('./src/routes/auth');

const cors = require('cors');
const app = express();


require('dotenv').config();
// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));


// Route addition example
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));