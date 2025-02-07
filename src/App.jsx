import { useEffect, useState } from 'react'
import './App.css'
import { AddTask } from './components/pages/AddTask'
import { Task } from './components/pages/Task';
import { Titulo } from './components/Titulo';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks]);
  
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }
  function onAddTaskClick(titulo, descricao) {
    const newTasks = {
      id: tasks.length + 1,
      titulo,
      descricao,
      isCompleted: false
    }
    setTasks([...tasks, newTasks]);
  }
  return (
    <>
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px] space-y-4">
          <Titulo>Getenciador de Tarefas</Titulo>
          <AddTask onAddTaskClick={onAddTaskClick} />
          <Task tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
        </div>

      </div>

    </>
  )
}

export default App
