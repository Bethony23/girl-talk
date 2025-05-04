const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// DATABASE CONNECTION
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// ROUTES

// AUTH ROUTES
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// APPOINTMENTS ROUTE
app.post('/api/appointments', async (req, res) => {
  const { name, date, reason } = req.body;

  try {
    const newAppointment = await pool.query(
      'INSERT INTO appointments (name, date, reason) VALUES ($1, $2, $3) RETURNING *',
      [name, date, reason]
    );
    res.status(201).json(newAppointment.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error while creating appointment.');
  }
});

// MESSAGES ROUTE
app.post('/api/messages', async (req, res) => {
  const { name, message } = req.body;

  try {
    const newMessage = await pool.query(
      'INSERT INTO messages (name, message) VALUES ($1, $2) RETURNING *',
      [name, message]
    );
    res.status(201).json(newMessage.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error while sending message.');
  }
});

// SERVER LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

