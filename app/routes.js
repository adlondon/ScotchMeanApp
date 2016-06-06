// grab the bear model
var Bear = require('./models/bear');
var express = require('express');

  module.exports = function(app) {

    // ROUTES FOR OUR API
    // =============================================================================
      var router = express.Router(); //get an instance of the express router

      // middleware to use for all requests
      router.use(function(req, res, next) {
          // do logging
          console.log('Something is happening.');
          next(); // make sure we go to the next routes and don't stop here
      });

    // test route to make sure everything is working (accessed at GET http://localhost:8080/api)

    router.get('/', function(req, res) {

        res.json({message: "Dank MayMays can't melt steel BayBays"}); // return all bears in JSON format
    });
    // route to creating goes here (app.post)
    // on routes that end in /bears
// ----------------------------------------------------
router.route('/bears')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var bear = new Bear();      // create a new instance of the Bear model
        bear.name = req.body.name;  // set the bears name (comes from the request)

        // save the bear and check for errors
        bear.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Bear created!' });
        });

    });
    // route to deleting goes here (app.delete)

    // REGISTER OUR ROUTES -------------------------------
    // all of our routes will be prefixed with /api
    app.use('/api', router);
  }
