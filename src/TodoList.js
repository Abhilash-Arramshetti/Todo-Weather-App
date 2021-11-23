import React, { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setTodo("");
  };
  const handleDelete = (indexVal) => {
    const newTodos = todos.filter((todo, index) => index !== indexVal);
    setTodos(newTodos);
  };
  return (
    <div>
      Todo Form
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={todo}
          onChange={handleChange}></input>
        &nbsp;
        <input type="submit" name="Add" value="Submit" />
      </form>
      {todos.map((todo, index) => (
        <div key={index}>
          <h4>
            {todo} <button onClick={() => handleDelete(index)}>Delete</button>
          </h4>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
