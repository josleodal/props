import './App.css';
import Task from './components/Task.jsx';
import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  return (
    <>
      <Task tasks={tasks} onDeleteTask={(taskId) => setTasks(tasks.filter(task => task.id !== taskId))} onToggleTaskComplete={(taskId) => setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task))} />
      <AddTaskForm tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default App;
