const express = require('express')
 //require :it's a built-in function with a special purpose: to load modules
const bodyParser = require('body-parser');

const miembro = require('./routes/miembro.route'); // Imports routes for the products

 // initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://alienx456:USAF1947@cluster0-ovjmv.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Body Parser is an npm package that is used to parse the incoming request bodies in a middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Mounts the specified middleware function or functions at the specified path
app.use('/miembros', miembro);


//assign a port where the express app will hear
let port = 1234;


// Una función sin argumentos requiere paréntesis:
// () => { sentencias }
//app.listen(path, [callback])
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});