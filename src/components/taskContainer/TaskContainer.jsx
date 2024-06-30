import '../taskContainer/TaskContainer.css'
import TaskCard from '../taskCard/TaskCard'


//passed the task from todo list to task card
function TaskContainer({toggleModal, toDoList}) {
  return (
    <div className="main-task-container">
        <div className="active-list-container">
            <span className='task-heading'>Active Tasks</span>
            {toDoList?.length>0&&toDoList?.map((task,index)=>{
              return (
                <div key={index}>
                  <TaskCard toggleModal={toggleModal} task={task} index={index}/>
                </div>
              )
            })}
            
        </div>
        <div className='completed-list-container'>
            <span className='task-heading'>Completed Tasks</span>
        </div>
    </div>
  )
}

export default TaskContainer

