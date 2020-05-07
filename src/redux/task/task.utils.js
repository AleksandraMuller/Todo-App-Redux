export const addTaskToArr = (todos, task) => [...todos, task];

export const editTaskInArr = (todos, task) => {
  const foundTask = todos.find((todo) => todo === task);

  if (foundTask) {
    task.edit = !task.edit;
    return [...todos];
  }
};

export const addEditedTaskIntoArr = (todos, obj) => {
  todos.find((todo) => {
    if (todo.id === obj.fullTodo.id) {
      todo.text = obj.task;
      todo.edit = false;
    }
  });

  return [...todos];
};
