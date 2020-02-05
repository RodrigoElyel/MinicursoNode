var express = require('express')
var router = express.Router()

router.route('/')
    .all((req, res, next) => {
        res.status(200)
        res.append('Content-Type', 'text/plain')
        next()
    })
    .get((req, res) => { //read
        res.end('Enviando todas as bebidas!')
    })
    .post((req, res) => { //create
        const { name, description } = req.body
        res.end(`Adicionando a bebida: ${name}, ${description}`)
    })
    .put((req, res) => { //update
        res.status(405)
        res.append('Allow', ['GET', 'POST', 'DELETE'])
        res.end('Operação PUT não é suportada em /bebidas')
    })
    .delete((req, res) => {
        res.end('Deletando todas as bebidas!')
    })

router.route('/:bebidaId')
    .all((req, res, next) => {
        res.status(200)
        res.append('Content-Type', 'text/plain')
        next()
    })
    .get((req, res) => {
        const { bebidaId } = req.params
        res.end(`Informações da bebidaId: ${bebidaId}`)
    })
    .post((req, res) => {
        const { bebidaId } = req.params
        res.status(405)
        res.append('Allow', ['GET', 'PUT', 'DELETE'])
        res.end(`Operação POST não é suportada em /bebidas/${bebidaId}`)
    })
    .put((req, res) => {
        const { bebidaId } = req.params
        const { name, description } = req.body
        res.write(`Atualizando bebida: ${bebidaId}`)
        res.write(`Novo nome: ${name}`)
        res.end(`Nova descrição: ${description}`)
    })
    .delete((req, res) => {
        const { bebidaId } = req.params
        res.end(`Deletando bebida: ${bebidaId}`)
    })

module.exports = router