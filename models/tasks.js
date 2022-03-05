const Task = require('./task');
require('colors');

class Tasks {
  _list = {};

  get listArr() {
    const arr = [];
    Object.keys(this._list).forEach((key) => arr.push(this._list[key]));
    return arr;
  }

  constructor() {
    this._list = {};
  }

  loadTasksFromArr = (arr = []) => {
    arr.forEach((task) => {
      this._list[task.id] = task;
    });
  };

  createTask(desc = '') {
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  listTasks() {
    const arr = [];
    let tasks = Object.keys(this._list);
    for (let i = 0; i < tasks.length; i++) {
      let task = this._list[tasks[i]];
      arr.push(
        `${i + 1 + '.'} ${task.desc} :: ${
          task.dateFinish ? 'Completada'.green : 'Pendiente'.red
        }`
      );
    }
    return arr;
  }

  listFinishedTasks(completed = true) {
    const arr = [];
    let tasks = Object.keys(this._list);
    for (let i = 0; i < tasks.length; i++) {
      let task = this._list[tasks[i]];
      if (completed && task.dateFinish) {
        arr.push(`${i + 1 + '.'} ${task.desc} :: ${'Completada'.green}`);
        continue;
      }
      if (!completed && !task.dateFinish) {
        arr.push(`${i + 1 + '.'} ${task.desc} :: ${'Pendiente'.red}`);
      }
    }
    return arr;
  }
}

module.exports = Tasks;
