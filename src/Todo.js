import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  };
  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };
  return (
    <div>
      Todo
      <form onSubmit={handleSubmit}>
        <input type="text" name="Task" value={task} onChange={handleChange} />
        &nbsp;
        <input type="submit" name="Add" value="Add" />
      </form>
      {todos?.map((todo, index) => (
        <div key={index}>
          <h4>
            {todo} &nbsp;
            <button onClick={() => deleteHandler(index)}>Delete</button>
          </h4>
        </div>
      ))}
    </div>
  );
}
export default App;
