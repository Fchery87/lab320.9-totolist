/* eslint-disable react/prop-types */

import { useState } from 'react';

function TodoForm({ dispatch }) {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
