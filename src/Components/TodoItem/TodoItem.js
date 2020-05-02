import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    // <div className="TodoItem">
    //     <input className="inputTode" type="checkbox" id={props.info.id} checked={props.info.completed}></input>
    //     <label className="labelTode" for={props.info.id}>{props.info.text}</label>
    // </div>
    <div className="TodoItem">
      <label class="container labelTode" for={props.info.id}>{props.info.text}
        <input type="checkbox" id={props.info.id} checked={props.info.completed}></input>
        <span class="checkmark"></span>
      </label>
    </div>
    
  );
}

export default TodoItem;