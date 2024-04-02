import React from 'react';

function Task({ tasks, onDeleteTask, onToggleTaskComplete }) {
  // Función para eliminar una tarea
  const deleteTask = (taskId) => {
    onDeleteTask(taskId); // Llamamos a la función onDeleteTask pasando el identificador de la tarea
  };

  // Función para cambiar el estado 'completed' de una tarea
  const toggleTaskComplete = (taskId) => {
    onToggleTaskComplete(taskId); // Llamamos a la función onToggleTaskComplete pasando el identificador de la tarea
  };

  return (
    <>
      <h1>Tareas</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} onClick={() => toggleTaskComplete(task.id)}>
            {task.text} <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Task;
