import Sidebar from "./Components/Sidebar";
import NewProject from "./Components/NewProject";
import { useState } from "react";
import NoProjectSelected from "./Components/NoProjectSelected";
import SelectedProject from "./Components/SelectedProject";

function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjects((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelProject() {
    setProjects((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };
    setProjects((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }

  function handleSelectProject(id) {
    setProjects((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  }

  const selectedId = projects.projects.find(
    (project) => project.id === projects.selectedProjectId
  );

  let content = <SelectedProject project={selectedId} />;

  if (projects.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartProject={handleStartAddProject} />;
  } else if (projects.selectedProjectId === null) {
    content = (
      <NewProject
        handleAddProject={handleAddProject}
        handleCancel={handleCancelProject}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartProject={handleStartAddProject}
        projects={projects.projects}
        handleSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
