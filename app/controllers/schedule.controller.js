const Schedule = require('../models/schedule.model.js');

// Create and Save a new Schedule
exports.create = (req, res) => {
    // Validate request
    if(!req.body.description) {
        return res.status(400).send({
            message: "Schdule content can not be empty"
        });
    }

    // Create a Schedule
    const schedule = new Schedule(req.body);

    // Save schedule in the database
    schedule.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the schedule."
        });
    });
};

// Retrieve and return all schedules from the database.
exports.findAll = (req, res) => {
    Schedule.find()
    .then(schedules => {
        res.send(schedules);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving schedules."
        });
    });
};

// Find a single schedule with a scheduleId
exports.findOne = (req, res) => {
    Schedule.findById(req.params.scheduleId)
    .then(schedule => {
        if(!schedule) {
            return res.status(404).send({
                message: "ScheduleId not found with id " + req.params.scheduleId
            });            
        }
        res.send(schedule);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Schedule not found with id " + req.params.scheduleId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving schedule with id " + req.params.scheduleId
        });
    });
};

// Update a schedule identified by the scheduleId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.description) {
        return res.status(400).send({
            message: "Schedule content can not be empty"
        });
    }

    // Find schedule and update it with the request body
    Schedule.findOneAndUpdate({id:req.params.scheduleId}, req.body, {new: true, useFindAndModify: false})
    .then(schedule => {
        if(!schedule) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.scheduleId
            });
        }
        res.send(schedule);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.scheduleId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.scheduleId
        });
    });
};

// Delete a schedule with the specified scheduleId in the request
exports.delete = (req, res) => {
    Schedule.findOneAndRemove({id:req.params.scheduleId}, {useFindAndModify: false})
    .then(schedule => {
        if(!schedule) {
            return res.status(404).send({
                message: "Schedule not found with id " + req.params.scheduleId
            });
        }
        res.send({message: "Schedule deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Schedule not found with id " + req.params.scheduleId
            });                
        }
        return res.status(500).send({
            message: "Could not delete schedule with id " + req.params.scheduleId
        });
    });
};