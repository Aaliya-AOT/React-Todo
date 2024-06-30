import '../taskContainer/TaskContainer.css';
import TaskCard from '../taskCard/TaskCard';

function TaskContainer({ toggleModal, toDoList, searchText, toggleDeleteModal, onDelete, onSave }) {
  //filter the task list based on the search box
  const filteredTasks = toDoList.filter(task => 
    task.taskName.toLowerCase().includes(searchText.toLowerCase())
  );

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
      </div>
    </div>
  );
}

export default TaskContainer;
