import { useState } from "react";
import TodoForm from "./TodoForm";
import { Edit } from "iconsax-react";
import { Trash } from "iconsax-react";

function Todo({ todos, completeTodo, updatedTodo, removeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updatedTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <ol className="todo-list">
      {todos.map((todo, index) => (
        <li
          key={index}
          className={todo.isComplete ? "todo-item complete" : "todo-item"}
        >
          <span
            className="todo-item__content"
            key={todo.id}
            onClick={() => {
              completeTodo(todo.id);
            }}
          >
            {todo.text}
          </span>
          <div className="todo-item__icon-wrapper">
            <Edit
              className="todo-item__icon"
              size="24"
              color="#fff"
              onClick={() => {
                setEdit({ id: todo.id, value: todo.text });
              }}
            />
            <Trash
              className="todo-item__icon"
              size="24"
              color="#fff"
              onClick={() => {
                removeTodo(todo.id);
              }}
            />
          </div>
        </li>
      ))}
    </ol>
  );
}

export default Todo;
