const mongoose = require('mongoose');

const { Schema } = mongoose;

const staffSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true 
    },
    description: {
        type: String
    },
    expertise: {
        type: String
    }
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;