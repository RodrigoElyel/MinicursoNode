var express = require('express')
var User = require('../models/user')
var router = express.Router()
const passport = require('passport')
const { getToken } = require('../autenticacao')

router.post('/signup', (req, res, next) => {
    User.register(new User({
        username: req.body.username
    }), req.body.password, (err, usuario) => {
        if (err) {
            return next(err)
        } else {
            passport.authenticate('local')(req, res, () => {
                res.send('usuário adicionado com sucesso')
            })
        }
    })
})

router.post('/login', passport.authenticate('local'), (req, res) => {
    const token = getToken({ _id: req.user._id })
    res.send({ sucess: true, token, message: "Logado" })
})

module.exports = router
