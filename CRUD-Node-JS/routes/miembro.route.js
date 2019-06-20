const express = require('express');
//Express es una infraestructura web de direccionamiento y 
//middleware que tiene una funcionalidad mínima propia: una 
//aplicación Express es fundamentalmente una serie de llamadas 
//a funciones de middleware.

//Utilice la clase express.Router para crear manejadores 
//de rutas montables y modulares. Una instancia Router es
//un sistema de middleware y direccionamiento completo;
const router = express.Router();

// Require the controllers 
const miembro_controller = require('../controllers/miembro.controller');


// a simple test url to 
//check that all of our files are communicating correctly.


router.get('/test', miembro_controller.test);
router.post('/create', miembro_controller.miembro_create);
router.get('/:id', miembro_controller.miembro_details);
router.put('/:id/update', miembro_controller.miembro_update);
router.delete('/:id/delete', miembro_controller.miembro_delete);


module.exports = router;