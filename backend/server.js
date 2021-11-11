let express = require('express'),
   path = require('path'),
   mongoose = require('mongoose'),
   cors = require('cors'),
   bodyParser = require('body-parser'),
   dbConfig = require('./database/db');
   
//Errors
let createError = require('http-errors');
// Connecting with mongo db
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://dudu:Abutbul2605@clusteramdocs-shard-00-00.idtoq.mongodb.net:27017,clusteramdocs-shard-00-01.idtoq.mongodb.net:27017,clusteramdocs-shard-00-02.idtoq.mongodb.net:27017/terms?ssl=true&replicaSet=atlas-1gwc64-shard-0&authSource=admin&retryWrites=true&w=majority", {
   useNewUrlParser: true,
   //useFindAndModify: false,
   useUnifiedTopology: true
}).then(() => {
      console.log('Database sucessfully connected')

   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)

// Setting up port with express js
const termRoute = require('../backend/routes/term.route')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cors()); 
app.use(express.static(path.join(__dirname, 'dist/mean-stack-crud-app')));
app.use('/', express.static(path.join(__dirname, 'dist/mean-stack-crud-app')));
app.use('/api', termRoute)



// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
   next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});

