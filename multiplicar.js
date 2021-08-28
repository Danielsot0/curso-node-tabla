
const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (num = 5, listar = false, h=0) => {

  try {




    let salida, consola = '';

    for (let index = 1; index <= h; index++) {
      salida += (`${num} x ${index} = ${(num * index)}\n`);
      consola += (`${num} ${'x'.red} ${index} ${ '='.red}  ${colors.yellow(num * index)}\n`);
    }

    if (listar) {
      console.log('======================'.green);
      console.log(`Tabla del: `.green,colors.blue(`${num}`));
      console.log('======================'.green);

      console.log(salida);
    }
    fs.writeFileSync(`./salida/tabla-${ num }.txt`, salida);

    return `tabla-${num}.txt creado`;

  }
  catch (err) {
    throw err;
  }

}

module.exports = {
  crearArchivo
}