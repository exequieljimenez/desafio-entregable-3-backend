const fs = require("fs")

class Contenedor {
    constructor(filename) {
        this.filename = filename
    }

    readList = () => {
        let lista = JSON.parse(fs.readFileSync(this.filename))
        return lista
    } 
}

module.exports = Contenedor