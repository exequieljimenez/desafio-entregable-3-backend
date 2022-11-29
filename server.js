const fs = require("fs")
const express = require('express')

class Contenedor {
    constructor(filename) {
        this.filename = filename
    }

    readList = () => {
        let lista = JSON.parse(fs.readFileSync(this.filename))
        return lista
    } 
}

const app = express()

let contenedor1 = new Contenedor("productos.txt")
let productos = contenedor1.readList()

app.get("/", (req, res) => {
    res.send('<h1 style="font-family: Courier New, Courier, monospace; font-weight: bold">Desafio Entregable n° 3</h1>')
})

app.get("/productos", (req, res) => {
    res.send({productos})
})

const randomNumber = (max) => Math.ceil(Math.random() * max)

const processData = () => {
    let obj = {}
    let productNumber = randomNumber(productos.length)
    obj = productos[productNumber - 1]
    return obj
}

app.get("/productoRandom", (req, res) => {
    let randomProduct = processData()
    res.send({randomProduct})
})

const PORT = 3000

const server = app.listen(PORT, () => {
    console.log(`Listening app port ${server.address().port}`)
})

server.on('error', (error) => {
    console.log('Error', error)
})