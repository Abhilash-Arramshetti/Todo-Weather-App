import React, { useRef, useState } from "react";
function Todos() {
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
    const newTodo = todos.filter((todo, index) => index !== indexVal);
    setTodos(newTodo);
  };
  return (
    <div>
      Todo Form
      <form>
        <input value={todo} type="text" onChange={handleChange}></input>
        {<button onClick={handleSubmit}>Submit</button>}
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

export default Todos;
