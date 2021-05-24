const serverless = require("serverless-http");
const express = require('express');
var cors = require('cors')

const bodyParser = require('body-parser');

// create express app
const app = express();

app.use(cors())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Scheduling application."});
});

// Require Schedule routes
require('./app/routes/schedule.routes.js')(app);

// listen for requests
app.listen(3005, () => {
    console.log("Server is listening on port 3005");
});
module.exports.server = serverless(app);