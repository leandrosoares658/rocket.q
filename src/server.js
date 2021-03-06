const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views')) //dirname = src, está trazendo o caminho da views - discord/src/views

server.use(express.urlencoded({extended: true}))

server.use(route)
server.listen(3300, () => console.log("RODANDO"))