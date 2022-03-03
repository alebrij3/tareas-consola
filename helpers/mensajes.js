require('colors');

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log('==============================');
    console.log('    Seleccione una opción     ');
    console.log('==============================\n');

    console.log('1.'.green, 'Crear tarea');
    console.log('2.'.green, 'Listar tareas');
    console.log('3.'.green, 'Listar tareas completadas');
    console.log('4.'.green, 'Listar tareas pendientes');
    console.log('5.'.green, 'Completar tarea(s)');
    console.log('6.'.green, 'Borrar tareas');
    console.log('0.'.green, 'Salir \n');

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question('Seleccione una opción: ', (ans) => {
      readline.close();
      resolve(ans);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (ans) => {
      readline.close();
      resolve();
    });
  });
};

module.exports = { pausa, mostrarMenu };
