const inquirer = require('inquirer');
require('colors');

const menuOptions = [
  {
    type: 'list',
    name: 'option',
    message: '¿Qué desea hacer?',
    choices: ['opt1', 'opt2', 'opt3'],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log('==============================');
  console.log('    Seleccione una opción     ');
  console.log('==============================\n');

  const ans = await inquirer.prompt(menuOptions);

  return ans;
};

module.exports = {
  inquirerMenu,
};
