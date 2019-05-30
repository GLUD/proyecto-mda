var mongoose = require('mongoose'),
    Esquema   = mongoose.Schema;

var miembroEsquema = new Esquema({
  nombre:    { type: String },
  apellido:     { type: Number },
  estado:  { type: String },
  codigo_academico:   { type: String },
  proyecto_curricular:  { type: Number },
});

module.exports = mongoose.model('miembro', miembroEsquema);

