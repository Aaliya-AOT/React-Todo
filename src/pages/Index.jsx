import { useState } from "react";
import Header from "../components/header/Header";
import Modals from "../components/modals/Modals";
import TaskContainer from "../components/taskContainer/TaskContainer";
import TaskFilter from "../components/taskFilter/TaskFilter";
import './Index.css'

function Index(){
    //state with initial value false which is used tp open and close modal
    const [isModalOpen,setIsModalOpen] = useState(false);
    let taskToDo = JSON.parse(localStorage.getItem("toDoList")) || [] ;

    //when btn is clicked , it changes the false to true for opening the modal
    const toggleModal=()=>{
        setIsModalOpen(!isModalOpen);
    }
    
    return(
        <div className="main-container">
            <Header toggleModal={toggleModal}/>
            <TaskFilter/>
            <TaskContainer toggleModal={toggleModal} toDoList={taskToDo}/>
            {isModalOpen && <Modals onClose={toggleModal} />}
        </div>
        
    )
}
export default Index;



//took the to do list from local storage and passed it to index.jsx thru taskToDo and passed it to task container