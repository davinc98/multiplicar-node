const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola el comando a multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla a multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}