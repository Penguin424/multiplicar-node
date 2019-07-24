const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10,
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo de txt guardado en la carpeta multiplicar', opts)
    .help()
    .argv;

module.exports = { argv }