import React, { useState,useEffect } from 'react'
import TodoItem from './TodoItem';
import { addTodosApi, getTodosApi, deleteTodosApi } from '../services/allAPI';

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [apiResult, setApiResult] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    await addTodosApi({task: todo});
    setTodo("");
    getTodos();
  }

  

  const getTodos = async () => {
    let result = await getTodosApi();
    setApiResult(result.data);
    console.log(result.data);
  }

  const deleteTodos = async (id) => {
    let result = await deleteTodosApi(id);
    getTodos();
  }

  useEffect(() => {
    getTodos();
  }, []);
 

  return (
    <div
      style={{ minWidth: "50%" }}
      className=" d-flex flex-column align-items-center justify-content-center rounded-3"
    >
      <form
        onSubmit={handleSubmit}
        className="box d-flex flex-column align-items-center text-light py-2 w-100 mb-3 p-3"
      >
        <h4 className="mt-3">Add new task to list</h4>
        <div className="d-flex align-items-center justify-content-center w-100">
          <input
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            className="todo-input text-light bg-light border-none bg-opacity-25 form-control w-75 me-3"
            type="text"
          />
          <button type="submit" className="btn btn-outline-light my-5">
            Add
          </button>
        </div>
      </form>
      <div className="todo-item d-flex flex-column align-items-center text-light py-4 w-100 mb-3 p-3">
        <h4>Todo List</h4>
        {apiResult?.map((eachTodo) => (
          <TodoItem
            key={eachTodo.id} 
            eachTodo={eachTodo.task}
            id={eachTodo.id}
            onDelete={deleteTodos}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo