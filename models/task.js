const { v4: uuidv4 } = require('uuid');

class Task {
  id = '';
  desc = '';
  dateFinish = null;
  constructor(desc) {
    this.id = uuidv4();
    this.desc = desc;
    this.dateFinish = null;
  }
}

module.exports = Task;
