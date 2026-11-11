function Tasks(props) {
    return(

        <ul className="space-y-4 w-[500px] mx-auto bg-slate-200 rounded-md shadow p-6 ">
            {props.tasks.map((task) => (
                <li key={task.id} className="flex space-x-2">
                    <button onClick={() => props.onTaskClick(task.id)} className={`bg-slate-400 w-full text-white p-2 list-none text-left rounded-md ${
                    task.isCompleted ? "line-through" : ""
                    }`}>

                        {task.title}
                        
                        
                    </button>
                    <button className="bg-slate-400 w-12 rounded-md text-center">

                        <img className="text-center flex justify-center" width="24" height="24" src="https://img.icons8.com/material-outlined/ffffff/forward.png" alt="forward"/>

                    </button>

                    <button onClick={() => props.onDeleteTaskClick(task.id)} 
                    className="bg-slate-400 w-12 rounded-md ">

                        <img className="text-center flex justify-center" width="24" height="24" src="https://img.icons8.com/material-sharp/ffffff/trash.png" alt="trash"/>

                    </button>
                </li>
            ))}
        </ul>
    )
};

export default Tasks;