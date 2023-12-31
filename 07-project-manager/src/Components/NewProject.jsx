import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

const NewProject = ({ handleAddProject , handleCancel}) => {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const modalRef = useRef();

  function handleSave() {
    const newProject = {
      title: title.current.value,
      description: description.current.value,
      date: date.current.value,
    };

    if (
      newProject.title.trim() == "" ||
      newProject.title.trim() === "" ||
      newProject.date.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }
    handleAddProject(newProject);
  }

  return (
    <>
      <Modal ref={modalRef}>
        <h2>Invalid Input!</h2>
        <p>please provide valid information</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button  onClick ={handleCancel} className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </menu>
        <div>
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} isTextArea label="Description" />
          <Input ref={date} label="Due Date" type="Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
