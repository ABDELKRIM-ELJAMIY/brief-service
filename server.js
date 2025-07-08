require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const briefRoutes = require('./routes/briefRoutes');
const cors = require('cors');

const app = express();
connectDB();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use('/api/briefs', briefRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));