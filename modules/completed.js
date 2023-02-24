/* eslint-disable import/no-cycle */
import objTask from '../src/index.js';

const btnCom = document.createElement('button');
btnCom.innerHTML = 'Clear all completed';
btnCom.classList.add('btnCom');

const clearAllCompleted = () => {
  const result = objTask.tasks.filter((task) => task.completed === false);
  objTask.tasks = result;
  objTask.populateField();
};

export default clearAllCompleted;
