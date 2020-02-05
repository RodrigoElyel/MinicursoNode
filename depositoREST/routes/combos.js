var express = require('express');
var router = express.Router();

router.route('/')
    .all((req, res, next) => {
        res.status(200)
        res.append('Content-Type', 'text/plain')
        next()
    })
    .get((req, res) => {
        res.end('Combos do Busca Pinga! Aproveitem')
    })
    .post((req, res) => {
        const {promo, description} = req.body        
        res.end(`Mais um combo: ${promo}, ${description}`)
    })
    .put((req, res) => {
        res.status(405)
        res.append('Allow', ['GET', 'POST', 'DELETE'])
        res.end('operação PUT não é suportada em /bebidas')
    })
    .delete((req, res) => {
        res.end('Combo encerrado meus Alcoolatras de plantão!')
    });

router.route('/comboId')
    .all((req, res, next) => {
        res.status(200)
        res.append('Content-Type', 'text/plain')
        next()
    })
    .get((req, res) => {
        const { comboId } = req.params
        res.end(`Sobre nosso combo: ${comboId}`)
    })
    .post((req, res) => {
        const { comboId } = req.params
        res.status(405)
        res.append('Allow', ['GET', 'PUT', 'DELETE'])
        res.end(`operação POST não é suportada em /combos/${comboId}`)
    })
    .put((req, res) => {
        const { comboId } = req.params
        const {name, description} = req.body
        res.write(`Atualizando combo: ${comboId}`)
        res.write(`Atualizando nome: ${name}`)
        res.end(`Atualizando descrição: ${description}`)
    })
    .delete((req, res) => {
        const {comboId} = req.params
        res.end(`Deletando combo: ${comboId}`)
    });

module.exports = router;
