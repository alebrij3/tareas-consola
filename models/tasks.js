const Task = require('./task');

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

  createTask(desc = '') {
    const task = new Task(desc);
    this._list[task.id] = task;
  }
}

module.exports = Tasks;
