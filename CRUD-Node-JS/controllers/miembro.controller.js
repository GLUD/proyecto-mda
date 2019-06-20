const Miembro = require('../models/miembro.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.miembro_create = function (req, res) {
    let miembro = new Miembro(
        {
            nombre: req.body.nombre,
            estado: req.body.estado,
            codigo: req.body.codigo
        }
    );

    miembro.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Miembro Created successfully')
    })
};

exports.miembro_details = function (req, res) {
    Miembro.findById(req.params.id, function (err, miembro) {
        if (err) return next(err);
        res.send(miembro);
    })
};

exports.miembro_update = function (req, res) {
    Miembro.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, miembro) {
        if (err) return next(err);
        res.send('Miembro udpated.');
    });
};

exports.miembro_delete = function (req, res) {
    Miembro.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Miembro Deleted successfully!');
    })
};