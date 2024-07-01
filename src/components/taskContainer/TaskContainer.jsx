import '../taskContainer/TaskContainer.css';
import TaskCard from '../taskCard/TaskCard';
import Button from '../../sharedComponents/Button';

function TaskContainer({ toggleModal, toDoList, searchText,sortOption, toggleDeleteModal, onDelete, onSave }) {
  //filter the task list based on the search box and sorts task
  const filteredTasks = toDoList
    .filter(task => task.taskName.toLowerCase().includes(searchText.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === "Newest First") {
        return b.taskId - a.taskId;
      } else {
        return a.taskId - b.taskId;
      }
    });
    
    const activeTasks =filteredTasks.filter(task => !task.taskStatus);
    const completedTasks =filteredTasks.filter(task => task.taskStatus);

    const handleStatus = (updatedTask) =>{
      const updatedToDoList = toDoList.map((task) => task.taskId === updatedTask.taskId ? updatedTask:task);
      onSave(updatedToDoList);
      // localStorage.setItem("toDoList", JSON.stringify(updatedToDoList));
    }
  return (
    <div className="main-task-container">
      <div className="active-list-container">
        <span className='task-heading'>Active Tasks</span>
        {activeTasks.length > 0 && activeTasks.map((task, index) => (
          <div key={index}>
            <TaskCard 
              toggleModal={toggleModal} 
              task={task} 
              index={index} 
              toggleDeleteModal={toggleDeleteModal} 
              onDelete={onDelete} 
              onSave={handleStatus} 
            />
          </div>
        ))}
      </div>
      <div className='completed-list-container'>
        <div className='completed-title'>
        <span className='task-heading'>Completed Tasks</span>
        <Button btnId={'clear-completed-btn'} btnText={"Clear Completed Tasks"}/>
        </div>
        {completedTasks.length > 0 && completedTasks.map((task, index) => (
          <div key={index}>
            <TaskCard 
              toggleModal={toggleModal} 
              task={task} 
              index={index} 
              toggleDeleteModal={toggleDeleteModal} 
              onDelete={onDelete} 
              onSave={handleStatus} 
            />
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default TaskContainer;
