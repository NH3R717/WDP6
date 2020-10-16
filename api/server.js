// tcp data port data pipeline setup

// setting up logger
const log = require('debug')('api:logging');

// get express app
const app = require('./app');

// set port to either one passed from environment var or 4000
const port = process.env.PORT || 4000

// start server and log running port
app.listen(port, () => log(`API listening on port ${port}!`));