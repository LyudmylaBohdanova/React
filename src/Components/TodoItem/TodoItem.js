import React from 'react';
import './TodoItem.css';

 class TodoItem extends React.Component{
   constructor(props){
    super(props);
    this.state = {
      completed : props.info.completed,
      id : props.info.id,
      text : props.info.text,
    };
    this.handleChange = this.handleChange.bind(this);
   }
  handleChange(){
    this.setState({
      completed : !this.state.completed
    });
  };
  render(){
    return (
      <div className="TodoItem">
        <label class="container labelTode" for={this.state.id}>{this.state.text}
          <input type="checkbox" id={this.state.id} checked={this.state.completed} onChange={() => this.handleChange()}></input>
          <span class="checkmark"></span>
        </label>
      </div>
    );
  };
 };

export default TodoItem;
