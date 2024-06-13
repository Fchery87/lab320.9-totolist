/* eslint-disable react/prop-types */
import { useState } from 'react';

function TodoItem({ todo, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleSave = () => {
    dispatch({ type: 'EDIT_TODO', payload: { id: todo.id, title: newTitle } });
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.title}</span>
          <div className="buttons">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button
              onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
              disabled={!todo.completed}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
