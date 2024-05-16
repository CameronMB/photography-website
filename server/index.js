const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/photography');

// Define a schema for booking and contact messages
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  preferredDate: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);
const Booking = mongoose.model('Booking', bookingSchema);

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const newMessage = new Message({ name, email, message });
  await newMessage.save();
  res.status(201).send('Message received');
});

// Booking form endpoint
app.post('/api/book', async (req, res) => {
  const { name, email, preferredDate, message } = req.body;
  const newBooking = new Booking({ name, email, preferredDate, message });
  await newBooking.save();
  res.status(201).send('Booking request received');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
