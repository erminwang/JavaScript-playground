// routes/note_routes.js

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  app.get('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    const details = {
        '_id': new ObjectID(noteId)
    };
    db.collection('notes').findOne(details, (err, item) => {
       if(err) {
         res.send({'error': 'error with "findOne" has occurred'});
       } else {
           res.send(item);
       }
    });
  });

  app.post('/notes', (req, res) => {
    const note = {
        title: req.body.title,
        body: req.body.body
    };
    db.collection('notes').insert(note, (err, result) => {
      if(err) {
        res.send({'error': 'an error has occurred'});
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    const details = {
      '_id': new ObjectID(noteId)
    };
    db.collection('notes').remove(details, (err, item) => {
      if(err) {
          res.send({'error': 'an error with "delete" has occurred'});
      } else {
          res.send('deleted:' + item);
      }
    });
  });

  app.put('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    const details = {
      '_id': new ObjectID(noteId)
    };
    const note = {
        title : req.body.title,
        body : req.body.body
    };
    db.collection('notes').update(details, note, (err, item) => {
       if(err){
           res.send({'error' : 'an error with "delete" occurred'});
       } else {
           res.send(item);
       }
    });
  });
};
