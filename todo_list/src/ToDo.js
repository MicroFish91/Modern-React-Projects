import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      edit: "",
      willEdit: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  handleChange(e){
    this.setState({ edit: e.target.value });
  }

  handleDelete(e){
    this.props.deleteTodo(this.props.id);
  }

  handleEdit(e){
    this.props.editTodo(this.props.id, this.state.edit);
    this.setState({ edit: "", willEdit: false });
  }

  render() {
    const { willEdit } = this.state;
    return (
      <div className="Todo-container">
        { (!willEdit) ? this.renderDefault() : this.renderEdit() }
      </div>
    )
  }

  renderDefault(){
    const { todoItem } = this.props;
    return (
      <div className="Todo">
        <div className="Todo-item">{todoItem}</div>
        <div className="Todo-icons">
          <FontAwesomeIcon className="Todo-icon" icon={faEdit} onClick={this.toggleEdit} />
          <FontAwesomeIcon className="Todo-icon" icon={faTrashAlt} onClick={this.handleDelete} />
        </div>
      </div>
    )
  }

  renderEdit(){
    return (
      <div className="Todo-edit">
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleEdit}>SAVE</button>
      </div>
    )
  }

  toggleEdit(e){
    this.setState({ willEdit: true });
  }
}

export default ToDo;