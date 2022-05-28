const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    speciality: { type: String, required: true },
    rating: { type: Number, required: true },
    location: { type: String, required: true },
    profilePic: { type: String, required: false }
})

const Doctor = mongoose.model('doctor', doctorSchema);

module.exports = Doctor;