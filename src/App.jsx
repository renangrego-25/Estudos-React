import Tasks from "./componentes/Tasks"
import Addtask from "./componentes/Addtask"
import { useState } from "react"


function App() {
  const [tasks, setTasks] = useState([{
    id:1,
    title: "Estudar programação",
    description: "estudar programação",
    isCompleted: false,
  },
  {
    id:1,
    title: "Estudar matemática",
    description: "estudar programação",
    isCompleted: false,
  },
  {
    id:1,
    title: "Estudar inglês",
    description: "estudar programação",
    isCompleted: false,
  }
]);

function onTaskClick(taskId){
  const newTasks = tasks.map(task => {
    if (task.id === taskId) {
      return {...task, isCompleted: task.isCompleted}
    }

    return task
  })
}
  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-500px">
        <h1 className="text-3x1 text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick}/>
        <Addtask />
      </div>
    </div>
  )
}

export default App
