
/**
 * Module dependencies.
 */

var express = require('express')  
  , http = require('http')
  , path = require('path');
var routes = {
    home: require('./routes/home'),
    trello: require('./routes/trello'),
    toggl: require('./routes/toggl')
};
var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public/',compress: true }));
  app.use(require('uglify-js-middleware')({ src: __dirname + '/public/',uglyext: 1 }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.home.index);
app.get('/trello', routes.trello.index);
app.get('/toggl', routes.toggl.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
