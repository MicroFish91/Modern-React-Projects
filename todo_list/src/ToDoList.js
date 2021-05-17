import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './ToDo';
import ToDoForm from './ToDoForm';

class ToDoList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      todoItems: []
    }
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this)
    this.editTodo = this.editTodo.bind(this);
  }

  addTodo(todo){
    let newTodos = [ ...this.state.todoItems ];
    newTodos.push(todo);
    this.setState({ todoItems: newTodos });
  }

  deleteTodo(id){
    let newTodos = [ ...this.state.todoItems ];
    newTodos.splice(id, 1);
    this.setState({ todoItems: newTodos });
  }

  editTodo(id, todo){
    let newTodos = [ ...this.state.todoItems ];
    newTodos.splice(id, 1, todo);
    this.setState({ todoItems: newTodos });
  }
  
  render() {
    const { todoItems } = this.state;
    return (
      <div className="ToDoList">
        <h1>Todo List!</h1>
        <h4>A Simple React Todo List App</h4> <hr />
        { todoItems.map((todoItem, index) => (
            <Todo deleteTodo={this.deleteTodo} editTodo={this.editTodo} id={index} key={uuidv4()} todoItem={todoItem}  />
        ))}
        <ToDoForm addTodo={this.addTodo} />
      </div>
    )
  }
}

export default ToDoList;