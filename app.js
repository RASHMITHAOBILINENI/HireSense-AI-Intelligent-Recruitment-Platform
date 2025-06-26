const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const candidateRoutes = require('./routes/candidateRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes');

connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/candidates', candidateRoutes);
app.use('/api/chatbot', chatbotRoutes);

module.exports = app;