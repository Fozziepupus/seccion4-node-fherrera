const fs = require('fs');

// let base = 3;

// DESDE AQUÍ PODRÍA EXPORTARSE (AGREGARSE AL MÓDULO GLOBAL DE NODE) LA FUNCIÓN MEDIANTE:
// modulo.exports.crearArchivoTabla = ...
const crearArchivoTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} No es un Número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i} \n`;
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/TABLA-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`TABLA-${base}.txt`);
        });

    });

};

//  MODIFICACIÓN DE LA SECCIÓN 4 PARA PODER LISTAR LA TABLA CON ARGUMENTOS USANDO YARGS

const listar = (base, limite) => {
    let data = '';
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)){
            reject(`La base o el límite no es un número: Base ${base} Límite: ${limite}`);
            return
        }
        
        for (let i = 1; i <= limite; i++) {
            data +=  `${base} x ${i} = ${base * i} \n`;
        }

        resolve(data);

    });     
};

module.exports = {
    // si el método se llamara solo crearArchivo, ya no tendría que repetirse gracias al ES6
    crearArchivo: crearArchivoTabla,
    listar
}