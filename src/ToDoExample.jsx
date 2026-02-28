import { useState } from "react";

export default function TodoExample() {
  const [taskList, setTaskList] = useState([]);
  const [taskItem, setTaskItem] = useState("");
  function addTask() {
    if (!taskItem.trim()) return;
    setTaskList([...taskList, taskItem]);
    setTaskItem("");
  }

  function deleteTask(index) {
    setTaskList(taskList.filter((value, i) => i !== index));
  }
  return (
    <>
      <h2>Todo List</h2>
      <input
        type="text"
        value={taskItem}
        onChange={(e) => setTaskItem(e.target.value)}
        placeholder="Enter task"
      />
      {taskItem && <button onClick={addTask}>Add Task</button>}
      <ol>
        {taskList.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button
              onClick={() => {
                deleteTask(index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}
