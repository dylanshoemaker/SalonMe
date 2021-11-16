const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  service: {
      type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  appointmentTime: {
    type: Date
  }
  
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
