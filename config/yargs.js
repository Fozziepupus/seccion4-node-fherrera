
const opts = {
    base: {
        demand: true,   //      indica que el flag es requerido
        alias: 'b'      //      indica el alías que puede utilizarse para el flag
    },
    limite: {
        alias: 'l',
        default: 10     //      el flag si no se envía, tendrá el valor 10 por default
    }
}

const { argv } = require('yargs')
    .command(['listar', 'crear'], 'imprime en consola la tabla de multiplicar',
        // .command('listar', 'imprime en consola la tabla de multiplicar',
        opts
    )
    .help();             //      permite mostrar la ayuda del comando antes descrito y sus opciones

module.exports = {
    argv
}