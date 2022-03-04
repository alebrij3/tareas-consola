require('colors');
const { inquirerMenu, pausa } = require('./helpers/inquirer');

const main = async () => {
  console.log('Hola, mundo');
  let myOption = '';
  do {
    myOption = await inquirerMenu();
    await pausa();
  } while (myOption !== 0);
};

main();
