import React, { useState } from "react";
import "../modals/Modals.css";
import close from "../../assets/close.svg";
import questionMark from "../../assets/question-mark.svg";
import InputField from "../../sharedComponents/InputField";
import Button from "../../sharedComponents/Button";

function Modals({ onClose , task}) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");

  //retreive to do list or empty array if there is not data in local storage
  const toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];

//triggered when form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      taskId: toDoList.length + 1,
      taskName: taskName,
      taskDescription: taskDescription,
      taskDate: taskDate,
      taskStatus: false,
  };

  //creates a array by adding new task into the to do list
    let taskList = [...toDoList,task];
    console.log("taskList:  ",taskList)
    localStorage.setItem("toDoList", JSON.stringify(taskList));

    //close the modal when task is added
    onClose();
  };

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2 className="modal-title">{task? "Edit Task" : "Add Task"} </h2>
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
              btnText={task? "Update Task" : "Add Task"}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Modals;
