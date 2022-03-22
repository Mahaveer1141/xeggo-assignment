import React, { useState } from "react";
import { addTodo, deleteTodo, logoutUser } from "../actions/action";
import { useDispatch, useSelector } from "react-redux";
import { removeUsername } from "../utils";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import "./Todo.css";

function Todo() {
  const navigate = useNavigate();
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    dispatch(addTodo({ text: todo, id: uuid() }));
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleLogout = () => {
    removeUsername();
    navigate("/login");
    dispatch(logoutUser());
  };

  return (
    <div className="body-todo">
      <div className="upper-todo">
        <h1>Todo</h1>
        <input
          className="text-input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Todo"
          type="text"
        />
        <button className="buttons add-button" onClick={handleAddTodo}>
          Add Todo
        </button>
        <div>
          <ul style={{ listStyle: "none" }}>
            {todos.map((item, key) => (
              <li key={key}>
                <div className="con">
                  <div className="todo-text">{item.text}</div>
                  <button
                    className="buttons todo-button"
                    onClick={() => handleDeleteTodo(item.id)}
                  >
                    complete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button className="buttons logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Todo;
