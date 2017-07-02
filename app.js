// invariable constants to represent core functionality 
// reliant on modules
const express = require('express');
const app = express();
const path = require('path');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const morgan = require('morgan');
const routes = require('./routes/indexRoute');
const session = require('express-session');
// establish middleware and validation for the whole app
// set up mustache, static pathing
app.engine('mustache',mustacheExpress());
app.set('views',path.join(__dirname,'views'));
app.set('view engine','mustache');
app.set('layout','layout');
app.use('/static',express.static('static'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressValidator());
app.use(morgan('dev'));
app.use(session({
  secret: 'holy moly',
  resave: false,
  saveUninitialized: true
}));
app.use(routes);

 
  
 
// establish server at a given port
app.listen(8000,function(){
	console.log('Gabble Server is running on port 8000');
});                            


