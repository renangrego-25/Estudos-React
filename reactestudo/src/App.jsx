import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import './App.css'
import { useState } from "react";

function App() {
  const [tasks, settasks] = useState([{
    id: 1,
    title: "Estudar Programação",
    description: "Estudar programçaão para ser full stack",
    isCompleted: false
  },{
    id: 2,
    title: "Estudar Programação",
    description: "Estudar programçaão para ser full stack",
    isCompleted: false
  },{
    id: 3,
    title: "Estudar Programação",
    description: "Estudar programçaão para ser full stack",
    isCompleted: false
  }]);

  function onTaskClick(taskId) {

    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return{ ...task, isCompleted: !task.isCompleted}
      } else {
        return task
      };

    });

    settasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {

    const newTasks = tasks.filter(task => task.id !== taskId)

    settasks(newTasks);
  }

  function onAddTaskSubmit (title, description) {

    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };

    settasks([...tasks, newTask])
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex flex-col justify-center p-6 text-center">

      <div className="max-w-500px mx-auto">
        <h1 className="text-3xl text-slate-100 font-bold text-center p-5">Gerenciador de Tarefas</h1>
      </div>
      <AddTask onAddTaskSubmit={onAddTaskSubmit} />
      <Tasks tasks = {tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
    </div>
  )
}

export default App;
