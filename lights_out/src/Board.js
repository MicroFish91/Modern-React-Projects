import React, { Component } from "react";
import Cell from "./Cell";
import { createBoard, randomize, remapLights } from './boardHelpers.js';
import './Board.css';

class Board extends Component {
  constructor(props) {
    super(props)
    let { rows, cols, startNum } = this.props;
  
    this.state = {
      rows: rows,
      cols: cols,
      board: randomize(startNum, rows, cols, createBoard(rows, cols))
    }
    this.handleClick = this.handleClick.bind(this)
  }

  mapBoard(){
    let { board } = this.state;
    let boardMap = board.map((col, cIndex) => (
      <div className="Cell-row" key={`r${cIndex}`}>
        {col.map((cell, rIndex) => (
          <Cell key={`${cIndex}${rIndex}`} lit={(cell) ? 'Cell-lit' : 'Cell'} handleClick={this.handleClick} value={`${cIndex},${rIndex}`} />
        ))}
      </div>
    ))
    return boardMap;
  }

  handleClick(e){
    let [cIndex, rIndex] = e.target.id.split(',');
    let newBoard = remapLights(parseInt(cIndex), parseInt(rIndex), this.state.board);
    console.log(newBoard);
    this.setState({ board: newBoard });
  }
  
  render() {
    return (
      <div className="Board">
          { this.mapBoard() }
      </div>
    )
  }
}

export default Board;