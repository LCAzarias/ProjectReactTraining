import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "ESTUDAR INGLÊS",
      description: "Melhorar o inglês",
      isCompleted: false,
    },
    {
      id: 2,
      title: "ESTUDAR PYTHON",
      description: "Desenvolvimento Web",
      isCompleted: false,
    },
    {
      id: 3,
      title: "ESTUDAR JAVASCRIPT",
      description: "Formação Full Stack",
      isCompleted: false,
    },
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-125">
        <h1 className="text-3xl text-slate-50 font-bold text-center">
          GERENCIADOR DE TAREFAS
        </h1>
        <AddTasks />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
