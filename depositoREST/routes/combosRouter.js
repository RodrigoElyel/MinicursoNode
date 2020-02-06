var express = require('express');
var Combos = require('../models/combos')
var router = express.Router();

router.route('/')
    .all((req, res, next) => {
        res.status(200).append('Content-Type', 'aplication/json')
        next()
    })
    .get((req, res, next) => { //read
        Combos.find({}).exec()
            .then((combo) => {
                res.json(combo)
            })
            .catch(next)
    })
    .post((req, res) => { //create
        Combos.create(req.body)
            .then((combo) => {
                res.json(combo)
            })
    })
    .put((req, res) => { //update
        res.status(405).json({error: 'Operação PUT não é suportada em /comboRouter'})
    })
    .delete((req, res) => {
        Combos.remove({}).exec()
            .then((combo) => {
                res.json(combo)
            })
            .catch(next)
    })

router.route('/:comboId')
    .get((req, res, next) => {
        Combos.findById(req.params.comboId).exec()
        .then((combo) => {
            res.json(combo)
        })
        .catch(next)
    })
    .post((req, res) => {
        res.status(405).json({error: 'Operação POST não suportada' + req.originalUrls})
    })
    .put((req, res, next) => {
        Combos.findByIdAndDelete(req.params.comboId, 
            {$set: req.body}, {new : true}).exec()
            .then((combo) => {
                res.json(combo)
            }) 
            .catch(next)
        
    })
    .delete((req, res, next) => {
        Combos.findByIdAndRemove(req.params.comboId).exec()
        .then((combo) => {
            res.json(combo)
        })
        .catch(next)
    })

module.exports = router;
