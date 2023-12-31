import NewTask from "./NewTask";

const Tasks = ({ tasks, onAddTask, onDeleteTask }) => {
  return (
    <section>
      <h2 className="text-2lx font-bold text-stone-400 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 ? (
        <p className="text-stone-600 my-4">
          this project does not have any tasks
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((item) => {
            return (
              <li key={item.id} className="flex justify-between my-4">
                <span>{item.text}</span>
                <button
                  className="text-stone-700 hover:text-red-500"
                  onClick={() => onDeleteTask(item.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
