import '../taskContainer/TaskContainer.css'
import TaskCard from '../taskCard/TaskCard'
import { toDoList } from '../../services/AddTask';

function TaskContainer({toggleModal}) {
  console.log(toDoList)
  return (
    <div className="main-task-container">
        <div className="active-list-container">
            <span className='task-heading'>Active Tasks</span>
            {toDoList?.length>0&&toDoList?.map((task,index)=>{
              return <TaskCard toggleModal={toggleModal} {toDoList}/>
            })}
        </div>
        <div className='completed-list-container'>
            <span className='task-heading'>Completed Tasks</span>
            <TaskCard/>
        </div>
    </div>
  )
}

export default TaskContainer

