*const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root route for testing
app.get('/', (req, res) => {
    res.send('Server is running idiot');
});

// Endpoint to handle form submissions
app.post('/submit-password', (req, res) => {
    const password = req.body.password;
    console.log('Received password:', password);
    res.send('Password received successfully');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
