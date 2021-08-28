const argv = require('yargs')
    .option('num', {
      alias: 'numero',
      type: 'number',
      demandOption: true,
      describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'muestra la tabla en la consola'
    })
    .option('h', {
      alias: 'hasta',
      type: 'number',
      demandOption: true,
      describe: 'muestra hasta que numero queremos multiplicar'
    })
    .check ((argv, options) => {
     if ( isNaN(argv.num)){
       throw 'La base tiene que ser un número'
     }
     return true;
    }) 
      .argv;


      module.exports = argv;