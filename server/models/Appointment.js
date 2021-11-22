const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  service: {
      type: String
  },
  appointmentDate: {
    type: String
  },
  appointmentTime: {
    type: String
  },
  user_id: {
    type: String
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
