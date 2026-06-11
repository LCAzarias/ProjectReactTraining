function Tasks(props) {
  return (
    <ul className="space-y-4 p-6 bg-slate-300 rounded-md shadow-md">
      {props.tasks.map((task) => (
        <li key={task.id} className="bg-slate-400 text-white p-2 rounded-md">
          {task.title}
          <button>Ver Detalhes</button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
