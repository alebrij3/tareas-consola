const inquirer = require('inquirer');
require('colors');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: 1,
        name: '1. Crear tarea',
      },
      {
        value: 2,
        name: '2. Listar tareas',
      },
      {
        value: 3,
        name: '3. Listar tareas completadas',
      },
      {
        value: 4,
        name: '4. Listar tareas pendientes',
      },
      {
        value: 5,
        name: '5. Completar tarea(s)',
      },
      {
        value: 6,
        name: '6. Borrar tareas',
      },
      {
        value: 0,
        name: '0. Salir',
      },
    ],
  },
];

const inquirerMenu = async () => {
  //console.clear();
  console.log('==============================');
  console.log('    Seleccione una opción     ');
  console.log('==============================\n');

  const { option } = await inquirer.prompt(questions);

  return option;
};

module.exports = {
  inquirerMenu,
};
