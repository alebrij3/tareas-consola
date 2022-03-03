require('colors');
const { inquirerMenu } = require('./helpers/inquirer');

const main = async () => {
  console.log('Hola, mundo');
  let myOption = '';
  do {
    myOption = await inquirerMenu();
    console.log(myOption);
  } while (myOption !== 0);
};

main();
