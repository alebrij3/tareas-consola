require('colors');
const { inquirerMenu } = require('./helpers/inquirer');

const main = async () => {
  let myOption = await inquirerMenu();
  while (myOption !== '0') {
    myOption = await inquirerMenu();
  }
};

main();
