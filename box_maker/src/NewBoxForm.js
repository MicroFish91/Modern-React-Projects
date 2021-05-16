import React, { Component } from 'react';

class NewBoxForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       height: "",
       width: "",
       backgroundColor: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    let { height, width, backgroundColor } = this.state;
    this.props.addBox({ height, width, backgroundColor });
    this.setState({ height: "", width: "", backgroundColor: "" });
  }
  
  render() {
    let { height, width, backgroundColor } = this.state;
    return (
      <div className="NewBoxForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="height">Height:</label>
          <input name="height" type="text" onChange={this.handleChange} value={height} /> <br />
          <label htmlFor="width">Width:</label>
          <input name="width" type="text" onChange={this.handleChange} value={width} /> <br />
          <label htmlFor="backgroundColor">Background Color:</label>
          <input name="backgroundColor" type="text" onChange={this.handleChange} value={backgroundColor} /> <br />
          <button>Add a new box!</button>
        </form>
      </div>
    )
  }
}

export default NewBoxForm;