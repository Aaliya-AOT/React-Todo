import { useState } from "react";
import Header from "../components/header/Header";
import Modals from "../components/modals/Modals";
import TaskContainer from "../components/taskContainer/TaskContainer";
import TaskFilter from "../components/taskFilter/TaskFilter";
import './Index.css'

function Index(){
    const [isModalOpen,setIsModalOpen] = useState(false);
    const toggleModal=()=>{
        setIsModalOpen(!isModalOpen);
        console.log("hi ojsjda");
    }
    return(
        <div className="main-container">
            <Header toggleModal={toggleModal}/>
            <TaskFilter/>
            <TaskContainer toggleModal={toggleModal}/>
            {isModalOpen && <Modals onClose={toggleModal} />}
        </div>
        
    )
}
export default Index;

