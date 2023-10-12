import React, { useReducer } from "react";
import TodoAdd from "./components/TodoAdd";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoReducer  from "./components/TodoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Hacer los challenges",
    done: false,
  },
];

function TodoApp() {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] ADD TODO",
      payload: todo,
    };
    dispatch(action);
  };

  return (
    <>
      <h1>TodoApp</h1>
      <hr />

      <div>
        <div>
          <TodoList todos={todos}></TodoList>
        </div>
        <div>
          <TodoAdd onNewTodo={handleNewTodo}></TodoAdd>
        </div>
      </div>
    </>
  );
}

export default TodoApp;
