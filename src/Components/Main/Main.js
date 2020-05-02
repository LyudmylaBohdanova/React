import React from 'react';
import './Main.css';
import TodoList from '../TodoItem/TodoList';

function Main() {
  return (
    <div className="Main">
      <React.StrictMode>
        <TodoList />
      </React.StrictMode>
    </div>
  );
}

export default Main;
