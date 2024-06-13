import { useReducer } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import initialState from './data/data';
import './App.css'; 

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [{ id: Date.now(), title: action.payload, completed: false }, ...state];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
      );
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <h1>Create Todo List</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
