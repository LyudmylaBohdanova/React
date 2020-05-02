import React from 'react';
import TodoItem from './TodoItem'
import {todosData} from './todosData';

function TodoList() {
    return(
    <div className="todo-list">
        {todosData.map(todo => <TodoItem info={todo}/>)}
    </div>
    );
}

export default TodoList;
