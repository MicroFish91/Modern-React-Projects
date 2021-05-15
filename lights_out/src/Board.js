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
    this.handleClick = this.handleClick.bind(this);
  }

  checkWin(board){
    return board.every(row => {
      return row.every(bool => bool === false);
    });
  }

  handleClick(e){
    let [cIndex, rIndex] = e.target.id.split(',');
    let newBoard = remapLights(parseInt(cIndex), parseInt(rIndex), this.state.board);
    this.setState({ board: newBoard });
  }

  mapBoard(){
    let { board } = this.state;
    let boardMap = board.map((col, cIndex) => (
      <div className="Cell-row" key={`r${cIndex}`}>
        {col.map((cell, rIndex) => (
          <Cell key={`${cIndex}${rIndex}`} lit={(cell) ? 'Cell-lit' : 'Cell'} value={`${cIndex},${rIndex}`} />
        ))}
      </div>
    ))
    return boardMap;
  }
  
  render() {
    let hasWon = this.checkWin(this.state.board);
    return (
      <div className="Board" onClick={this.handleClick}>
          { (!hasWon) ? this.mapBoard() : 'You win!'}
      </div>
    )
  }
}

export default Board;