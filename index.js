require('colors');
const {
  inquirerMenu,
  pausa,
  taskName,
  readInput,
} = require('./helpers/inquirer');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

const main = async () => {
  let opt = '';
  const tasks = new Tasks();
  do {
    opt = await inquirerMenu();
    await pausa();
    switch (opt) {
      case 1:
        let name = await readInput('Nombre de la tarea: ');
        tasks.createTask(name);
        break;

      case 2:
        console.log(tasks.listArr);
        break;
    }
  } while (opt !== 0);
};

main();
