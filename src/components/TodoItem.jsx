import React, { useState } from "react";


const TodoItem = ({ eachTodo, id, onDelete, onEdit}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(eachTodo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(id, editedTodo);
    setIsEditing(false);
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-center w-100">
        {isEditing ? (
          <input
            className="form-control w-75 me-3"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
        ) : (
          <h6 className="text-center bg-light border-none bg-opacity-25 py-2 px-2 rounded w-75 mb-2 me-3">
            {eachTodo}
          </h6>
        )}
        {isEditing ? (
          <button
            onClick={handleSave}
            className="btn btn-outline-success mb-2 me-2"
          >
            <i className="fa-solid fa-check"></i>
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="btn btn-outline-primary mb-2 me-2"
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        )}
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
