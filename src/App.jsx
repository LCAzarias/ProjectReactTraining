import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
function App() {
const [tasks, setTasks] = useState([
  id: 1,
  title: "Estudar Programação",
  description: "Estudar React, JavaScript e outras tecnologias de desenvolvimento web.",
  isCompleted: false,
]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-125">
        <h1 className="text-3xl text-slate-50 font-bold text-center">GERENCIADOR DE TAREFAS</h1>
        <Tasks />
        <AddTasks />
      </div>
    </div>
  );
}

export default App;

