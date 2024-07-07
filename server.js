const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5003; // Use the PORT environment variable if provided

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Handle root URL
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

// Handle POST request to /submit-password
app.post('/submit-password', (req, res) => {
  const { password } = req.body;
  console.log(`Received password: ${password}`); // Corrected console.log statement
  res.send('Password received');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
