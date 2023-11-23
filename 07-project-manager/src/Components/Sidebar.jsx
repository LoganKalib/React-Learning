import { useState } from "react";

const Sidebar = () => {
  const [projects, setProjects] = useState([]);

  function handleAddProject() {}

  return (
    <aside>
      <h1>Your Projects</h1>
      <button>+ Add Project</button>
      <ul></ul>
    </aside>
  );
};

export default Sidebar;
