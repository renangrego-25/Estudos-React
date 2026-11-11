import { useState } from "react";

function AddTask({ onAddTaskSubmit }){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col w-[500px] mx-auto m-5">
            
            <input className="border-slate-400 border outline-slate-400 px-4 py-2 rounded-md" type="text" placeholder="Digite o título da tarefa"
            onChange={(event) => setTitle(event.target.value)}
            />

            <input className="border-slate-400 border outline-slate-400 px-4 py-2 rounded-md"  type="text" placeholder="Digite a descrição da tarefa"
            onChange={(event) => setDescription(event.target.value)}
            />

            <button onClick={() => onAddTaskSubmit(title, description)} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>
        </div>
    )
}

export default AddTask;