// Importamos React y useState
import React, { useState } from 'react';

// Definimos el componente AddTaskForm
function AddTaskForm({ onAddTask, tasks, setTasks }) {
  // Definimos el estado para el texto de la nueva tarea
  const [newTaskText, setNewTaskText] = useState('');

  // Función para manejar el cambio en el campo de entrada
  const handleChange = (event) => {
    setNewTaskText(event.target.value); // Actualizamos el estado con el nuevo texto de la tarea
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario
    if (newTaskText.trim() !== '') { // Verificamos que el texto de la tarea no esté vacío
      const newId = tasks.length + 1; // Generamos un nuevo identificador para la tarea
      const newTask = {
        id: newId,
        text: newTaskText,
        completed: false
      };
      setTasks([...tasks, newTask]); // Actualizamos el estado 'tasks' agregando la nueva tarea
      setNewTaskText(''); // Limpiamos el campo de entrada después de agregar la tarea
    }
  };

  // Renderizamos el formulario para agregar una nueva tarea
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Campo de entrada para la nueva tarea */}
        <input
          type="text"
          value={newTaskText}
          onChange={handleChange}
          placeholder="Añadir nueva tarea..."
        />
        {/* Botón para agregar la tarea */}
        <button type="submit">Agregar</button>
      </form>
    </>
  );
}

// Exportamos el componente AddTaskForm
export default AddTaskForm;
