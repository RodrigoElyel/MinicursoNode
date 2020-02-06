var express = require('express');
var Promotions = require('../models/promotions')
var router = express.Router();

router.route('/')
    .all((req, res, next) => {
        res.status(200).append('Content-Type', 'aplication/json')
        next()
    })
    .get((req, res, next) => { //read
        Promotions.find({}).exec()
            .then((promo) => {
                res.json(promo)
            })
            .catch(next)
    })
    .post((req, res) => { //create
        Promotions.create(req.body)
            .then((promo) => {
                res.json(promo)
            })
    })
    .put((req, res) => { //update
        res.status(405).json({error: 'Operação PUT não é suportada em /promosRouter'})
    })
    .delete((req, res) => {
        Promotions.remove({}).exec()
            .then((promo) => {
                res.json(promo)
            })
            .catch(next)
    })

router.route('/:promoId')
    .get((req, res, next) => {
        Promotions.findById(req.params.promoId).exec()
        .then((promo) => {
            res.json(promo)
        })
        .catch(next)
    })
    .post((req, res) => {
        res.status(405).json({error: 'Operação POST não suportada' + req.originalUrls})
    })
    .put((req, res, next) => {
        Promotions.findByIdAndDelete(req.params.promoId, 
            {$set: req.body}, {new : true}).exec()
            .then((promo) => {
                res.json(promo)
            }) 
            .catch(next)
        
    })
    .delete((req, res, next) => {
        Promotions.findByIdAndRemove(req.params.promoId).exec()
        .then((promo) => {
            res.json(promo)
        })
        .catch(next)
    })


module.exports = router;
