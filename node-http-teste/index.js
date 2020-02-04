const http = require('http')

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) => { // function(req, res){} poderia ser assim
    console.log('cabeçalhos da requisição:', req.headers)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Flamengo!!</h1>')
})

server.listen(port, hostname, () => {
    console.log(`servidor escutando em http://${hostname}:${port}/`)
})