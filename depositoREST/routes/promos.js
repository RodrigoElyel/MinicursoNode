var express = require('express');
var router = express.Router();

router.route('/')
    .all((req, res, next) => {
        res.status(200)
        res.append('Content-Type', 'text/plain')
        next()
    })
    .get((req, res) => {
        res.end('Promoções iniciadas do Busca Pinga! Aproveitem')
    })
    .post((req, res) => {
        const {promo, description} = req.body        
        res.end(`Mais uma promoção relampago: ${promo}, ${description}`)
    })
    .put((req, res) => {
        res.status(405)
        res.append('Allow', ['GET', 'POST', 'DELETE'])
        res.end('Operação PUT não é suportada em /bebidas')
    })
    .delete((req, res) => {
        res.end('Promoção finalizada meus Alcoolatras de plantão!')
    });

router.route('/promoId')
    .all((req, res, next) => {
        res.status(200)
        res.append('Content-Type', 'text/plain')
        next()
    })
    .get((req, res) => {
        const { promoId } = req.params
        res.end(`Sobre nossa promoção: ${promoId}`)
    })
    .post((req, res) => {
        const { promoId } = req.params
        res.status(405)
        res.append('Allow', ['GET', 'PUT', 'DELETE'])
        res.end(`Operação POST não é suportada em /promos/${promoId}`)
    })
    .put((req, res) => {
        const { promoId } = req.params
        const {name, description} = req.body
        res.write(`Atualizando promoção: ${promoId}`)
        res.write(`Atualizando nome: ${name}`)
        res.end(`Atualizando descrição: ${description}`)
    })
    .delete((req, res) => {
        const {promoId} = req.params
        res.end(`Deletando promoção: ${promoId}`)
    });

module.exports = router;
