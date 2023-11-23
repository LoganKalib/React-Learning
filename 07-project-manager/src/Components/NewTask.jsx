import { useState } from "react";

const NewTask = ({onAddTask}) => {
  const [enteredTasks, setEnteredTasks] = useState("");

  function handleChange(e) {
    setEnteredTasks(e.target.value);
  }

  function handleClick() {
    onAddTask(enteredTasks)
    setEnteredTasks("");
  }

  return (
    <div className="flex  items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTasks}
      />
      <button
        className=" tect-stone-700 hover:text-stone-900"
        onClick={handleClick}
      >
        Add task
      </button>
    </div>
  );
};
export default NewTask;
