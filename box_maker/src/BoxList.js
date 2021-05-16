import Box from './Box';
import NewBoxForm from './NewBoxForm';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      boxes: []
    }
    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this)
  }

  addBox(box){
    let newBoxes = [ ...this.state.boxes, box ];
    this.setState({ boxes: newBoxes });
  }

  removeBox(index){
    let newBoxes = [ ...this.state.boxes ];
    newBoxes.splice(index, 1);
    this.setState({ boxes: newBoxes });
  }
  
  render() {
    let { boxes } = this.state;
    return (
      <div className="BoxList">
        <NewBoxForm addBox={this.addBox} />
        <h2>List of Boxes:</h2>
        <div className="BoxList-Box-Container">
          {boxes.map((box, index) => (
            <Box 
            color={box.backgroundColor} 
            height={box.height} 
            id={index}
            key={uuidv4()} 
            removeBox={this.removeBox}
            width={box.width} 
            />
          ))}
        </div>
      </div>
    )
  }
}

export default BoxList;