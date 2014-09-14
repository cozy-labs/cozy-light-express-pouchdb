module.exports.configureAppServer = function(app, config, routes, callback) {
  app.use(auth.connect(basic));

  app.use('/db', require('express-pouchdb')(PouchDB));
  callback();
};

module.exports.configure = function(options, config, program) {};
