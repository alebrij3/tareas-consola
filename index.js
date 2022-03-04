require('colors');
const { inquirerMenu, pausa, readInput } = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/saveFile');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

const main = async () => {
  let opt = '';
  const tasks = new Tasks();

  const dbTasks = readDB();

  if (dbTasks && dbTasks.length > 0) {
    tasks.loadTasksFromArr(dbTasks);
  }
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        let name = await readInput('Nombre de la tarea: ');
        tasks.createTask(name);
        break;

      case 2:
        tasks.listTasks().forEach((taskLine) => {
          console.log(taskLine);
        });
        break;
    }
    saveDB(tasks.listArr);
    await pausa();
  } while (opt !== 0);
};

main();
