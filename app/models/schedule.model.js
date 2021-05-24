const mongoose = require('mongoose');

const ScheduleSchema = mongoose.Schema({
    id: String, 
    description: String,
    date: String,
    time: String,
    description: String,
    color: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Schedule', ScheduleSchema);