const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const courseRoutes = require('./routes/courseRoutes'); // Check this path
const planRoutes = require('./routes/planRoutes'); // Check this path
const recommendationRoutes = require('./routes/recommendationRoutes'); // Check this path

// Use routes
app.use('/api/courses', courseRoutes);
app.use('/api/plans', planRoutes);
app.use('/api/recommendations', recommendationRoutes);

// Default Route
app.get('/', (req, res) => {
    res.send('MentorBridge Backend API');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
