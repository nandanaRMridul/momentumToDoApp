import React from "react";

const TodoItem = ({ eachTodo, id, onDelete}) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center w-100">
        <h6
          className="text-center bg-light border-none bg-opacity-25 py-2 px-2 rounded w-75 mb-2 me-3"
         
        >
          {eachTodo}
        </h6>
        <button
          onClick={() => onDelete(id)}
          className="btn btn-outline-danger mb-2"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </>
  );
};

export default TodoItem;
