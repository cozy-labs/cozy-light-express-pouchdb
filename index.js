module.exports.configureAppServer = function(app, config, routes, callback) {
  PouchDB = require('pouchdb');
  app.use('/db', require('express-pouchdb')(PouchDB));
  callback();
};


module.exports.getTemplate = function() {};
module.exports.configure = function(options, config, program) {};
