const port = 3003

const express = require('express')
const bodyParser = require('body-parser')
const server = express()

server.use(bodyParser.urlencoded({ extended: true })) //dados que vierem de um formulário
server.use(bodyParser.json()) //parser json para todas as outras urls

server.listen(port, function () {
    console.log(`Servidor rodando na porta ${port}`)
})
