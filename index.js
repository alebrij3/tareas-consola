require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async () => {
  let myOption = await mostrarMenu();

  while (myOption !== '0') {
    myOption = await mostrarMenu();
    if (myOption !== '0') await pausa();
  }
};

main();
