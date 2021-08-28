
const { crearArchivo } = require('./multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');


//console.log(process.argv);
//const [ , , arg3 = 'num=5'] = process.argv;
//const [ , num = 5] = arg3.split('=');

console.clear();


crearArchivo(argv.num, argv.l, argv.h)
   .then ( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
   .catch (err => console.log(err));