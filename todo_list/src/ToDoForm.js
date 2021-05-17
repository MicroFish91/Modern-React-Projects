import React, { Component } from 'react';
import './ToDoForm.css';

class ToDoForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todo: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
    this.setState({ todo: e.target.value });
  }

  handleClick(e){
    this.props.addTodo(this.state.todo);
    this.setState({ todo: "" });
  }
  
  render() {
    const { todo } = this.state;
    return (
      <div className="ToDoForm">
        <input type="text" onChange={this.handleChange} value={todo} />
        <button onClick={this.handleClick}>ADD TODO</button>
      </div>
    )
  }
}

export default ToDoForm;