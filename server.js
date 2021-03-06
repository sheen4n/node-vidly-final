const winston = require('winston');
const express = require('express');
const config = require('config');
const app = express();

require('./startup/logging')();
require('./startup/prod')(app);
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

const port = process.env.PORT || config.get('port');
// const port = config.get("port") || 3900;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;
