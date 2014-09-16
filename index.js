module.exports.configureAppServer = function(app, config, routes, callback) {
  PouchDB = config.pouchdb;
  app.use('/db', require('express-pouchdb')(PouchDB));
  callback();
};

module.exports.getTemplate = function() {
  return '';
};

module.exports.configure = function(options, config, program) {};
