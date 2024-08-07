import React, { useState } from 'react'
import '../taskCard/TaskCard.css'
import InputField from '../../sharedComponents/InputField'
import yellowDot from '../../assets/yellow-dot.svg'
import calender from '../../assets/calender.svg'
import editBtn from '../../assets/edit.svg'
import deleteBtn from '../../assets/delete.svg'
import Button from '../../sharedComponents/Button'
import Modals from '../modals/Modals'
import DeleteModal from '../deleteModal/DeleteModal'


function TaskCard({task,index,onDelete,onSave}) {
  //initially set the state variables of both modals as false
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [isDeleteModalOpen,setDeleteIsModalOpen] = useState(false);
  
  //when the button is clicked the modals open
  const toggleModal=()=>{
    setIsModalOpen(!isModalOpen);
  }
  const toggleDeleteModal=()=>{
    setDeleteIsModalOpen(!isDeleteModalOpen);
  }

  const handleStatusChange = () =>{
    const updatedTasks = {...task, taskStatus: !task.taskStatus};
    onSave(updatedTasks);
  }
  return (
    <div className='task-box' key={index}>
        <InputField inputType={'checkbox'} inputId={'task-status'} checked={task.taskStatus}
        onChange={handleStatusChange}/>
        <div className='task-content'>
                <div className='task-title-container'>
                    <div className='task-title-content'>
                      <h3 className='task-title'>{task?.taskName}</h3>
                      <img src={yellowDot}></img>
                    </div>
                    <div className='task-btn'>
                      <Button btnId={'edit-btn'} btnClick={toggleModal} btnText={<img src={editBtn}></img>}/>
                      <Button btnId={'delete-btn'} btnClick={toggleDeleteModal} btnText={<img src={deleteBtn}></img>}/>
                    </div>
                </div>
                <p className='task-description'>{task?.taskDescription}</p>
                <div className='task-due-date-container'>
                    <img src={calender}></img>
                    <p className='task-due-date'>by {task?.taskDate}</p>
                </div>
        </div>
        {/*passed the save and delete functions to modals */}
        {isModalOpen && <Modals onClose={toggleModal} task={task} onSave={onSave}/>}
        {isDeleteModalOpen && <DeleteModal onClose={toggleDeleteModal} onDelete={()=>onDelete(task.taskId)}/>}
    </div>
  )
}

export default TaskCard
