const mongoose = require('mongoose');
const { Schema } = mongoose;

const appointmentSchema = new Schema({
  title: {
      type: String
  },
  startTime: {
    type: String
  },
  
},
);


// module.exports = mongoose.model('Appointment', appointmentSchema,'title');


const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
