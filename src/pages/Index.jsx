import { useState } from "react";
import Header from "../components/header/Header";
import Modals from "../components/modals/Modals";
import TaskContainer from "../components/taskContainer/TaskContainer";
import TaskFilter from "../components/taskFilter/TaskFilter";
import "./Index.css";
import DeleteModal from "../components/deleteModal/DeleteModal";

function Index() {
  //state with initial value false which is used tp open and close modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteIsModalOpen] = useState(false);
  const [toDoList, setToDoList] = useState(
    JSON.parse(localStorage.getItem("toDoList")) || []
  );
  //state with initial value  for the seaarch function and for sort fn
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("Newest First");

  // let taskToDo = JSON.parse(localStorage.getItem("toDoList")) || [] ;
  //when btn is clicked , it changes the false to true for opening the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const toggleDeleteModal = () => {
    setDeleteIsModalOpen(!isDeleteModalOpen);
  };

  // Function to save the task
  const handleSave = (updatedToDoList) => {
    console.log("Updated todo list in index", updatedToDoList);
    setToDoList(updatedToDoList);
  };

  const handleUpdate = (updatedTask) => {
    setToDoList(updatedTask);
  };

  //function to delete task which is also saved to the data list
  const handleDelete = (taskId) => {
    const updatedToDoList = toDoList.filter((task) => task.taskId !== taskId);
    setToDoList(updatedToDoList);
    localStorage.setItem("toDoList", JSON.stringify(updatedToDoList));
  };

  //function for the search box changes
  const handleSearch = (searchText) => {
    setSearchText(searchText);
  };

  //function for handling sorting based on the option we select
  const handleSort = (sortOption) => {
    setSortOption(sortOption);
  };

    // Function to clear completed tasks
    const clearCompletedTasks = () => {
      const updatedToDoList = toDoList.filter((task) => !task.taskStatus);
      setToDoList(updatedToDoList);
      localStorage.setItem("toDoList", JSON.stringify(updatedToDoList));
    };
  return (
    <div className="main-container">
      <Header toggleModal={toggleModal} />
      <TaskFilter onSearch={handleSearch} onSort={handleSort} />

      <TaskContainer
        toggleModal={toggleModal}
        toDoList={toDoList}
        toggleDeleteModal={toggleDeleteModal}
        onDelete={handleDelete}
        onSave={handleSave}
        searchText={searchText}
        sortOption={sortOption}
        clearCompletedTasks={clearCompletedTasks}
      />

      {isModalOpen && (
        <Modals onClose={toggleModal} saveUpdated={() => handleUpdate()} />
      )}
      {isDeleteModalOpen && <DeleteModal onClose={toggleDeleteModal} />}
    </div>
  );
}
export default Index;

//took the to do list from local storage and passed it to index.jsx thru taskToDo and passed it to task container
