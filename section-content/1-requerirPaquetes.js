
/**
 *      EXISTEN 2 TIPOS DE REQUIRE:
 *      LOS QUE EXISTEN YA EN NODE CARGADOS POR DEFAULT Y LOS QUE SON DE TERCEROS QUE ALGUIEN MÁS DESARROLLÓ
 *      LOS QUE SON DE ARCHIVOS QUE NOSOTROS CREAMOS Y ESTÁN EN ALGUNA RUTA DE NUESTRO PROYECTO USANDO ./ O ../
 * 
 *      en el requiere puede o no ponerse el *.js en el nombre del archivo, se acostumbra no hacerlo
*/
// indica que se requiere el paquete existente en NodeJs FileSystem según la doc: 
// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_file_system
const fs = require('fs');

let base = 3;
let data;

for (let i = 1; i <= 10; i++) {
    data += console.log(`${base} x ${i} = ${base * i} \n`);
}

// const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile(`tablas/TABLA-${base}`, data, (err) => {
    if (err)
        throw err;
    console.log(`The file TABLA-${base}.txt has been saved!`);
});