const fs = require('fs');

const saveDB = (data) => {
  const file = './store/db.json';
  fs.writeFileSync(file, JSON.stringify(data));
};

const readDB = () => {
  const file = './store/db.json';
  if (!fs.existsSync(file)) return false;
  const data = fs.readFileSync(file, 'utf-8');
  return JSON.parse(data);
};

module.exports = {
  saveDB,
  readDB,
};
