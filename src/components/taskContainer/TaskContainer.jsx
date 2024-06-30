import '../taskContainer/TaskContainer.css';
import TaskCard from '../taskCard/TaskCard';
import Button from '../../sharedComponents/Button';

function TaskContainer({ toggleModal, toDoList, searchText,sortOption, toggleDeleteModal, onDelete, onSave }) {
  //filter the task list based on the search box
  const filteredTasks = toDoList
    .filter(task => task.taskName.toLowerCase().includes(searchText.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === "Newest First") {
        return b.taskId - a.taskId;
      } else {
        return a.taskId - b.taskId;
      }
    });

  return (
    <div className="main-task-container">
      <div className="active-list-container">
        <span className='task-heading'>Active Tasks</span>
        {filteredTasks.length > 0 && filteredTasks.map((task, index) => (
          <div key={index}>
            <TaskCard 
              toggleModal={toggleModal} 
              task={task} 
              index={index} 
              toggleDeleteModal={toggleDeleteModal} 
              onDelete={onDelete} 
              onSave={onSave} 
            />
          </div>
        ))}
      </div>
      <div className='completed-list-container'>
        <span className='task-heading'>Completed Tasks</span>
        <Button btnId={'clear-completed-btn'} btnText={"Clear Completed Tasks"}/>
      </div>
    </div>
  );
}

export default TaskContainer;
