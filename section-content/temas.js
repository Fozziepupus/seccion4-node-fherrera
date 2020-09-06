/**
 *
 * Temas de la sección
 *
 *  +   Requer datos de otros archivos.
 *  +   Requerir paquetes.
 *  +   Importar archivos personalizados.
 *  +   NPM
 *      -Install
 *      -Uninstall
 *  +   Package.json
 *  +   Yargs
 *  +   Recibir parámetros por línea de comando.
 *  +   Colores para consola.
 *
 */


/**
 * 
 *      EXISTEN 2 TIPOS DE REQUIRE:
 *      +   LOS QUE EXISTEN YA EN NODE CARGADOS POR DEFAULT Y LOS QUE SON DE TERCEROS QUE ALGUIEN MÁS DESARROLLÓ
 *              en estos casos el requiere no lleva ./ ../ o / ya que son paquetes agregados/instalados
 *      +   LOS QUE SON DE ARCHIVOS QUE NOSOTROS CREAMOS Y ESTÁN EN ALGUNA RUTA DE NUESTRO PROYECTO USANDO ./ O ../
 * 
 *      en el requiere puede o no ponerse el *.js en el nombre del archivo, se acostumbra no hacerlo 
 *      
 *
 *      NOTA:       RECORDAR QUE AL VER:
 * 
 *                  const   { ... } = ...
 *                  let     { ... } = ...
 *  
 *                  indica que es una DESTRUCTURACIÓN
 * 
 * 
 *     EN NODE EXISTE UN MÓDULO GLOBAL
 *
 *     Se puede comprobar mediante: console.log(module);
 *
 *     lo que genera:
 *
 *     Module {
 *          id: '.',
 *          path: 'D:\\Docs\\Cursos\\Node\\FHerrera\\Node\\04-BasesNode',
 *          exports: {},    // - LUGAR QUE PERMITE PONER/EXPORTAR OBJETOS PARA QUE SE TRABAJEN DE MANERA GLOBAL
 *          parent: null,
 *          filename: 'D:\\Docs\\Cursos\\Node\\FHerrera\\Node\\04-BasesNode\\2-importar-archivos-proyecto.js',
 *          loaded: false,
 *          children: [],
 *          paths: [
 *            'D:\\Docs\\Cursos\\Node\\FHerrera\\Node\\04-BasesNode\\node_modules',
 *            'D:\\Docs\\Cursos\\Node\\FHerrera\\Node\\node_modules',
 *            'D:\\Docs\\Cursos\\Node\\FHerrera\\node_modules',
 *            'D:\\Docs\\Cursos\\Node\\node_modules',
 *            'D:\\Docs\\Cursos\\node_modules',
 *            'D:\\Docs\\node_modules',
 *            'D:\\node_modules'
 *          ]
 *      }
 *
 *      ESTE MÓDULO ESTÁ DISPONIBLE DE MANERA GLOBAL A LO LARGO DE TODA LA APLICACIÓN
 *
 * 
 *      TAMBIÉN EXISTE UNA VARIABLE GLOBAL EN NODE LLAMADA PROCESS
 * 
 *      Se puede comprobar mediante: console.log(process);
 * 
 *      EL CUAL MUESTRA DATOS RELACIONADOS CON EL SO Y REVISAR CONFIGURACIONES
 * 
 *      Entre esos datos existe una propiedad llamada ARGV
 * 
 *      LA CUAL FUNCIONA PARA MANDAR ARGUMENTOS, SI SE IMPRIMEN LA PROPIEDAD
 * 
 *        console.log(process.argv); // SE PODRA VER EL PATH DESDE DONDE SE EJECUTA NODE Y EL DEL ARHIVO
 * 
 *      PARA RECIBIR PARÁMETROS DESDE LA TERMINAL
 * 
 *      const argv  = process.argv;
 *      let param   = argv[2];              //  en este caso el index 2 porq los primeros dos son los paths antes mencionados 
 *      let base    = param.split('=')[1];  //  pensando en que ejecutas este js: node temas.js --base=5
 *      console.log(base);                  //  imprimirá en consola: 5
 * 
 * 
 *      NOTA:       ESTA FORMA ES VOLÁTIL ADEMÁS DE QUE PUEDE DAR PROBLEMA CON MÁS PARÁMETROS
 *                  Y EL ORDEN CAMBIE POR N PARÁMETROS, ESTO SE PUEDE MEJORAR CON PAQUETES QUE
 *                  YA EXISTEN Y QUE GENERAN DOCUMENTACIÓN PARA HACERLO MÁS SIMPLE. (YARGS)
 * 
 *                  npm i yargs
 * 
 * 
 * 
 *      ####    INICIALIZAR PROYECTO NODE
 * 
 * 
 *      npm init
 * 
 *      Comando que permite inicializar un proyecto Node y crea un archivo package.json
 * 
 *      pregunta el nombre y debe ser URL Friendly (no mayúsculas, no espacios)
 *      version: 1.0.0 o la que se desea especificar
 *      descripción: una descripción sobre el proyecto, opcional
 *      entry point: punto de entrada para la aplicación, es el primer archvo de node que se ejcuta y despliega
 *                   toda la aplicación, por default es app.js
 *      test command: comano de prueba de la aplicación.
 *      git repositoy: si se tiene un repo se coloca aquí
 *      keywords: cuando se comparte en algún repo público como NPM se utilizan keywords
 *      author: quién crea el proyecto
 *      licence: "ISC" / "MTI"
 *      
 * 
 *      Este package.json contiene la configuración necesaria del proyecto como las dependencias
 *      requeridas para que el proyecto trabaje, y paquetes instalados, así como las DEPENDENCIAS DE DESARROLLO QUE SOLO
 *      DEBEN ESTAR EN LA MÁQUINA DE QUIÉN DESARROLLA EL PROYECTO Y NO DEBEN SER ENVIADAS AL SERVIDOR
 * 
 *      
 *      Al instalar paquetes/dependencias se debe tener en cuenta lo siguiente:
 * 
 *      EXISTEN: dependencies, devDependencies
 * 
 * 
 *      npm i package_name                  INSTALA LA DEPENDENCIA SIN SER REQUERIDA PARA EL PROYECTO
 * 
 *      npm i package_name --save           INSTALA LA DEPENDENCIA COMO REQUERIDA PARA EL PROYECTO
 * 
 *      npm i package_name --save-dev       INSTALA LA DEPENDENCIA COMO DEPENDENCIA DE DESARRLLO LA
 *                                          PROPIEDAD devDependencies EN EL PACKAGE.JSON
 *      
 *      para desinstalar paquetes:          npm uninstall package_name
 * 
 * 
 *      #######################
 * 
 *      PARA EL MANEJO DE PARÁMETROS AL EJECUTAR LA APLICACIÓN NODE SE PUEDE EMPLEAR EL PAQUETE YARGS
 * 
 *      npm i yargs
 * 
 *      Para agregar yargs a nuestro entry point en Node se puede hacer:
 * 
 *      const argv = require("yargs");          Con lo cual se consigue tener todo el objeto del paquete en el obj declarado
 *      const argv = require("yargs").argv;     Solo se agrega al objeto declarado la propiedad argv de Yargs sin todo el obj full
 *      const { argv } = require('yargs');      Usando destructuración se consigue el mismo resultado anterior.
 * 
 *      En los últimos dos casos descritos si se imprime en consola el objt argv de Yargs: 
 * 
 *      app.js
 * 
 *      console.log(argv);
 * 
 *      { _: [], '$0': 'app' }                      Se imprime ejecutando: node app
 * 
 *      { _: [ 'listar' ], base: 5, '$0': 'app' }   Se imprime ejecutando: node app listar --base 5
 *                                                  donde listar sería interpretado como un comando aislado
 *                                                  que aparece en el array de Yargs y después se muestran
 *                                                  los pares de valores enviados como flags mediante --nameFlag valueFlag
 * 
 *      Para hacer un flag o parámetro requerido se puede hacer lo siguiente (básico):
 * 
 *      Se puede usar command para agregar los comandos que la aplicación acepta, mediante un string que indique el nombre
 *      del comando o un array de comandos como primer parámetro, una descripción como segundo parámetro y un builder 
 *      opcional, para indicar las opciones o flags que acepta el o los camandos configurados.
 * 
 *      const argv = require('yargs')
 *           .command('listar', 'imprime en consola la tabla de multiplicar',
 *           {
 *               base: {
 *                   demand: true   //  indica que el flag es requerido
 *               }
 *           })
 *           .argv;
 * 
 *      LO QUE GENERARÍA EN CONSOLA LO SIGUIENTE AL EJECUTAR:       node app listar
 * 
 *      imprime en consola la tabla de multiplicar
 *
 *      Opciones:
 *      --help     Muestra ayuda                                            [booleano]
 *      --version  Muestra número de versión                                [booleano]
 *      --base                                                             [requerido]
 *      Falta argumento requerido: base
 * 
 * 
 *      Se pueden agregar alías a los flags para evitar colocar los flags completos:
 * 
 * 
 *      const argv = require('yargs')
 *           .command('listar', 'imprime en consola la tabla de multiplicar',
 *           {
 *               base: {
 *                   demand: true,   //  indica que el flag es requerido
 *                   alias: b        //  indica un alías al flag base
 *               }
 *           })
 *           .help()                 //  muestra la ayuda sobre el comando y sus opciones
 *           .argv;     
 * 
 *      CON LA CONFIGURACIÓN ANTERIOR EL RESULTADO EN CONSOLA AL EJECURAR: 
 *  
 *      node app listar --limite 20 --b 5       // en este caso no importa si el flag viene antes o después de otros flags
 * 
 *      { _: [ 'listar' ], base: 5, b: 5, '$0': 'app' }
 * 
 * 
 *      
 * 
 * 
 */

// console.log(process.argv);