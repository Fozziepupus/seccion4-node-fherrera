
// const argv = require("yargs");       //  muestra objeto completo de Yargs
// const argv = require("yargs").argv;  //  muestra solo el obj de la propiedad argv de Yargs
// const { argv } = require('yargs');      //  el mismo resultado anterior usando destructuración
/*
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar',
        {
            base: {
                demand: true,   //      indica que el flag es requerido
                alias: 'b'      //      indica el alías que puede utilizarse para el flag
            },
            limite: {
                alias: 'l',
                default: 10     //      el flag si no se envía, tendrá el valor 10 por default
            }
        })
    .help()                     //      permite mostrar la ayuda del comando antes descrito y sus opciones
    .argv;
*/

//  con destructuración para evitar usar el .argv al final del help()
/*
const { argv } = require('yargs')
    .command(['listar', 'crear'], 'imprime en consola la tabla de multiplicar',
    // .command('listar', 'imprime en consola la tabla de multiplicar',
        {
            base: {
                demand: true,   //      indica que el flag es requerido
                alias: 'b'      //      indica el alías que puede utilizarse para el flag
            },
            limite: {
                alias: 'l',
                default: 10     //      el flag si no se envía, tendrá el valor 10 por default
            }
        })
    .help();                     //      permite mostrar la ayuda del comando antes descrito y sus opciones
*/

// OPTIMIZANDO EL CÓDIGO SE PUEDE MOVER LA CONFIGURACIÓN DE YARGS A OTRO ARCHIVO

// en este caso en config/yargs.js

const { argv } = require('./config/yargs');


const { crearArchivo, listar } = require('./tablas/multiplicar');

// const base = 3;
//  obtener el parámetro enviado desde el comando, sin saber si viene en la posición correcta
// const base = process.argv[2].split('=')[1];
// let argv2 = process.argv;// en este caso se obtendran los parámetros default de los paths y los enviados

console.log(argv);
// console.log(argv2);

// console.log(argv.);
const comm = argv._[0];

switch (comm) {
    case 'listar':
        console.log('Listar');
        listar(argv.b, argv.l).then(res => console.log(res)).catch(err => { console.log(err)});
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.l)
            .then(archivo => console.log(`El archivo ${archivo} fue creado`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}



// 