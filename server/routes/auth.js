const express = require('express');
const router = express.Router();

// POST /api/auth/signup
router.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Simple validation
  if (!username || !password) {
    return res.status(400).json({ message: 'Please provide both username and password.' });
  }

  // Normally here you would save to a database
  console.log('New user signed up:', username);

  // Send back a success message
  res.status(201).json({ message: 'User signed up successfully!' });
});

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Normally you would check against a database
  console.log('Login attempt:', username);

  // Temporary logic: accept any username/password
  if (username && password) {
    res.status(200).json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});


module.exports = router;


