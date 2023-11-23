import noProject from "../assets/no-projects.png";
import { addProject } from "./Sidebar";
const NoProjectSelected = ({ onStartProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProject}
        alt="No project image"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-700 my-4">
        No project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or create a new one
      </p>
      <p className="mt-8">
        <button className={addProject} onClick={onStartProject}>
          Create project
        </button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
