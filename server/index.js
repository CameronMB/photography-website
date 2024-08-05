const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: './.env' });

const Booking = require('./models/Booking');
const Contact = require('./models/Contact');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGODB_URI;
console.log('MONGODB_URI:', uri);
if (!uri) {
  console.error('MONGODB URI is not defined. Check your .env file.');
  process.exit(1);
}

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));

// Routes
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const newContact = new Contact({ name, email, message });

  try {
    await newContact.save();
    console.log('Contact form data saved:', req.body);
    res.status(200).json({ success: true, message: 'Message received' });
  } catch (error) {
    console.error('Error saving contact form data:', error);
    res.status(500).json({ success: false, message: 'Error saving data' });
  }
});

app.post('/api/booking', async (req, res) => {
  const { name, email, date, message } = req.body;
  const newBooking = new Booking({ name, email, date, message });

  try {
    await newBooking.save();
    console.log('Booking form data saved:', req.body);
    res.status(200).json({ success: true, message: 'Booking request received' });
  } catch (error) {
    console.error('Error saving booking form data:', error);
    res.status(500).json({ success: false, message: 'Error saving data' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
