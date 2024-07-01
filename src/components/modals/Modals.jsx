import React, { useState } from "react";
import "../modals/Modals.css";
import close from "../../assets/close.svg";
import questionMark from "../../assets/question-mark.svg";
import InputField from "../../sharedComponents/InputField";
import Button from "../../sharedComponents/Button";

function Modals({ onClose, task, saveUpdated }) {
  //setting the task details as the stored data if there is task and if there isnt then state variable is set to none
  const [taskName, setTaskName] = useState(task ? task.taskName : "");
  const [taskDescription, setTaskDescription] = useState(
    task ? task.taskDescription : ""
  );
  const [taskDate, setTaskDate] = useState(task ? task.taskDate : "");

  //retreive to do list or empty array if there is not data in local storage
  const toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];

  saveUpdated = (updatedTask) => {
    console.log(updatedTask);
  };
  //triggered when form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedTask = {
      taskId: task ? task.taskId : toDoList.length + 1,
      taskName: taskName,
      taskDescription: taskDescription,
      taskDate: taskDate,
      taskStatus: task ? task.taskStatus : false,
    };

    let updatedToDoList;
    if (task) {
      // Update the task in the toDoList
      updatedToDoList = toDoList.map((t) =>
        t.taskId === task.taskId ? updatedTask : t
      );
    } else {
      // Add the new task to the toDoList
      updatedToDoList = [...toDoList, updatedTask];
    }

    // Update localStorage
    localStorage.setItem("toDoList", JSON.stringify(updatedToDoList));
    saveUpdated(updatedTask);
    onClose(); // Close the modal
  };

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2 className="modal-title">{task ? "Edit Task" : "Add Task"} </h2>
        <Button
          btnId={"cancel-btn"}
          btnClick={onClose}
          btnText={<img src={close}></img>}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="modal-content">
          <div className="task-title-field">
            <label htmlFor="task-name" className="task-name-label">
              Title *
            </label>
            <InputField
              inputId={"task-name"}
              inputType={"text"}
              inputPlaceholder={"eg. Create two ad banners"}
              inputValue={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className="task-description-field">
            <label htmlFor="task-detail" className="task-detail-label">
              Description <img src={questionMark}></img>
            </label>
            <textarea
              id="task-detail"
              placeholder="Add your task description."
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="task-date-field">
            <label htmlFor="task-date" className="task-date-label">
              Due Date
            </label>
            <InputField
              inputId={"task-date"}
              inputType={"date"}
              inputValue={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </div>
          <div className="task-btn-field">
            <Button btnId={"cancel-btn"} onClose={onClose} btnText={"Cancel"} />
            <Button
              btnType={"submit"}
              btnId={"add-task-btn"}
              btnText={task ? "Update Task" : "Add Task"}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Modals;
