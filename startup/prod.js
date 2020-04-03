const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const xss = require('xss-clean');

module.exports = function(app) {
  // Enable CORS
  app.use(cors({ origin: '*' }));

  // Prevent http param pollution
  app.use(hpp());

  // Prevent XSS attacks
  app.use(xss());

  // Set Security Headers
  app.use(helmet());

  app.use(compression());
};
