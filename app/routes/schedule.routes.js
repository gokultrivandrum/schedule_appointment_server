module.exports = (app) => {
    const schedules = require('../controllers/schedule.controller.js');

    // Create a new Note
    app.post('/schedules', schedules.create);

    // Retrieve all schedules
    app.get('/schedules', schedules.findAll);

    // Retrieve a single schedule with scheduleId
    app.get('/schedules/:scheduleId', schedules.findOne);

    // Update a Note with scheduleId
    app.put('/schedules/:scheduleId', schedules.update);

    // Delete a Note with scheduleId
    app.delete('/schedules/:scheduleId', schedules.delete);
}