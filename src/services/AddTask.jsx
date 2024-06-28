import { useEffect, useState } from "react";

export const toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];
const AddTask = (taskData) => {
  const { taskName, taskDescription, taskDate } = taskData;
  const [updatedTask,setUpdatedTask]=useState([])
  
  console.log("updatedTask",updatedTask,taskData)
  const task = [{
    taskId: toDoList.length + 1,
    taskName: taskName,
    taskDescription: taskDescription,
    taskDate: taskDate,
    taskStatus: false,
}];
  useEffect(()=>{
    setUpdatedTask([...toDoList,task])
    localStorage.setItem("toDoList", [...toDoList,task]);
  },[taskData])
  
  return toDoList;  
};

export default AddTask;
