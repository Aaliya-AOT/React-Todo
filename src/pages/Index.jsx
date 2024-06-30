import {useState } from "react";
import Header from "../components/header/Header";
import Modals from "../components/modals/Modals";
import TaskContainer from "../components/taskContainer/TaskContainer";
import TaskFilter from "../components/taskFilter/TaskFilter";
import './Index.css'
import DeleteModal from "../components/deleteModal/DeleteModal";

function Index(){
    //state with initial value false which is used tp open and close modal
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [isDeleteModalOpen,setDeleteIsModalOpen] = useState(false);
    const [toDoList, setToDoList] = useState(JSON.parse(localStorage.getItem("toDoList")) || []);

    // let taskToDo = JSON.parse(localStorage.getItem("toDoList")) || [] ;
    //when btn is clicked , it changes the false to true for opening the modal
    const toggleModal=()=>{
        setIsModalOpen(!isModalOpen);
    }
    const toggleDeleteModal=()=>{
        setDeleteIsModalOpen(!isDeleteModalOpen);
    }
    const handleSave=(updatedToDoList)=>{
        setToDoList(updatedToDoList);
    }
    const handleDelete = (taskId) =>{
        const updatedToDoList = toDoList.filter(task=> task.taskId !== taskId);
        setToDoList(updatedToDoList);
        localStorage.setItem("toDoList",JSON.stringify(updatedToDoList));
    }
    return(
        <div className="main-container">
            <Header toggleModal={toggleModal}/>
            <TaskFilter/>
            <TaskContainer toggleModal={toggleModal} toDoList={toDoList} toggleDeleteModal={toggleDeleteModal} onDelete={handleDelete} onSave={handleSave} />
            {isModalOpen && <Modals onClose={toggleModal} onSave={handleSave}/>}
            {isDeleteModalOpen && <DeleteModal onClose={toggleDeleteModal}/>}
        </div>
        
    )
}
export default Index;


//took the to do list from local storage and passed it to index.jsx thru taskToDo and passed it to task container