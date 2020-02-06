var express = require('express')
var Bebidas = require('../models/bebidas')
var router = express.Router()

router.route('/')
    .all((req, res, next) => {
        res.status(200).append('Content-Type', 'aplication/json')
        next()
    })
    .get((req, res, next) => { //read
        Bebidas.find({}).exec()
            .then((bebida) => {
                res.json(bebida)
            })
            .catch(next)
        //res.end('Enviando todas as bebidas!')
    })
    .post((req, res) => { //create
        Bebidas.create(req.body)
            .then((bebida) => {
                res.json(bebida)
            })
        //const { name, description } = req.body
        //res.end(`Adicionando a bebida: ${name}, ${description}`)
    })
    .put((req, res) => { //update
        res.status(405).json({error: 'Operação PUT não é suportada em /bebidasRouter'})
        //res.append('Allow', ['GET', 'POST', 'DELETE'])
        //res.end('Operação PUT não é suportada em /bebidas')
    })
    .delete((req, res) => {
        Bebidas.remove({}).exec()
            .then((bebida) => {
                res.json(bebida)
            })
            .catch(next)
        //res.end('Deletando todas as bebidas!')
    })

router.route('/:bebidaId')
    .get((req, res, next) => {
        Bebidas.findById(req.params.bebidaId).exec()
        .then((bebida) => {
            res.json(bebida)
        })
        .catch(next)
        //const { bebidaId } = req.params
        //res.end(`Informações da bebidaId: ${bebidaId}`)
    })
    .post((req, res) => {
        res.status(405).json({error: 'Operação POST não suportada' + req.originalUrls})
        //const { bebidaId } = req.params    
        //res.append('Allow', ['GET', 'PUT', 'DELETE'])
        //res.end(`Operação POST não é suportada em /bebidas/${bebidaId}`)
    })
    .put((req, res, next) => {
        Bebidas.findByIdAndDelete(req.params.bebidaId, 
            {$set: req.body}, {new : true}).exec()
            .then((bebidas) => {
                res.json(bebidas)
            }) 
            .catch(next)
        
    })
    .delete((req, res, next) => {
        Bebidas.findByIdAndRemove(req.params.bebidaId).exec()
        .then((bebida) => {
            res.json(bebida)
        })
        .catch(next)
        //const { bebidaId } = req.params
        //res.end(`Deletando bebida: ${bebidaId}`)
    })

module.exports = router


//    .all((req, res, next) => {
//        res.status(200)
//        res.append('Content-Type', 'text/plain')
//        next()
//    })

//      PUT
//      const { bebidaId } = req.params
        //const { name, description } = req.body
        //res.write(`Atualizando bebida: ${bebidaId}`)
        //res.write(`Novo nome: ${name}`)
        //res.end(`Nova descrição: ${description}`)