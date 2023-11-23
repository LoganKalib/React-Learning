export const aside =
  "w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl";
export const title = "mb-8 font-bold uppercase md:text-xl text-stone-200";
export const addProject =
  "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";

const Sidebar = ({
  onStartProject,
  projects,
  handleSelectProject,
  selectedId,
}) => {
  return (
    <aside className={aside}>
      <h1 className={title}>
        <strong>Your Projects</strong>
      </h1>
      <div>
        <button className={addProject} onClick={onStartProject}>
          + Add Project
        </button>
      </div>
      <ul className="mt-8">
        {projects.map((item) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (item.id === selectedId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={item.id}>
              <button
                onClick={() => handleSelectProject(item.id)}
                className={cssClasses}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
