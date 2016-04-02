
    var express    = require('express');
    var bodyParser = require('body-parser');
    var app        = express();
    var morgan     = require('morgan');
    var mongoose   = require('mongoose');
    var config     = require('./config');
    var crypto     = require('crypto');
    var utils  = require('./utils');

// configure app
    app.use(morgan('dev'));
    app.newGuid = utils.newGuid;
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'GET,POST');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    var port = process.env.PORT || 8080;

    mongoose.connect(config.database); // connect to our database
    var Visitor = require('./entities/visitor');


// ROUTES FOR OUR API
// =============================================================================

    var router = express.Router();

    require('./routes/visitor')(app,router);

    // REGISTER OUR ROUTES 
    app.use('/api', router);




// START THE SERVER
// =============================================================================
    app.disable('etag');
    app.use(express.static(__dirname + '/public'));
    app.listen(port);
    console.log('TECHDAY server running on port ' + port);

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});

