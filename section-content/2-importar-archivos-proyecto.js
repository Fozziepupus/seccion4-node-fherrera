/** 
* DE ESTA FORMA SE CREA UNA CONSTANTE PARA PODER IMPORTAR EL CONTENIDO DE MULTIPLICAR.JS DEL DIRECTORIO TABLAS
* EN ESTE CASO TODO LO QUE DEVUELVA EL REQUIRE ESTARA DENTRO DE LA CONSTANTE multiplicar Y HABRA QUE
* UTILIZAR EL OBJETO CADA QUE SE NECESITE EJECUTAR ALGO DE multiplicar.js
*/

// const multiplicar = require('./tablas/multiplicar');
/*
multiplicar.crearArchivo(base)
    .then(archivo => console.log(`El archivo ${archivo} fue creado`))
    .catch(err => console.log(err));
*/

/**
 * PERO TAMBIÉN SE PUEDE UTILIZAR DE MANERA QUE SE PUEDA EVITAR USAR EL NOMBRE DEL PAQUETE
 * MEDIANTE DESUSTRURACIÓN const/let { nameAccessor } = ...
 */

 const { crearArchivo } = require('./tablas/multiplicar');

// const base = 3;
const base = process.argv[2].split('=')[1];

crearArchivo(base)
    .then(archivo => console.log(`El archivo ${archivo} fue creado`))
    .catch(err => console.log(err));