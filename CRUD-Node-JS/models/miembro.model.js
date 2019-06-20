const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB
//collection and defines the shape of the documents within that collection

let miembroSchema = new Schema({
    nombre: {type: String, required: true, max: 100},
    estado: {type: String, required: true, max: 50},
    codigo: {type: Number, required: true},
});

// Export the model
module.exports = mongoose.model('Miembro', miembroSchema);