// routes/indes.js

const noteRoutes = require('./note_routes');
module.exports = function(app, db) {
  noteRoutes(app, db);
  // Other route groups go here.
};
