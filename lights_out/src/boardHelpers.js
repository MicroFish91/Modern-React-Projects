function createBoard(rows, cols){
  let board = [];
  for(let y = 0; y < rows; y++){
    let row = [];
    for(let x = 0; x < cols; x++){
      row.push(false);
    }
    board.push(row);
  }
  return board;
}

function randomize(num, row, col, board){
  let newBoard = [ ...board ];
  for(let c = 0; c < num; c++){
    const cIndex = Math.floor(Math.random() * row);
    const rIndex = Math.floor(Math.random() * col);
    (newBoard[cIndex][rIndex] !== true) ? newBoard[cIndex][rIndex] = true : c -= 1;
  }
  return newBoard;
}

function remapLights(cIndex, rIndex, board){
    let newBoard = [ ...board ];
    newBoard[cIndex][rIndex] = !newBoard[cIndex][rIndex];  // Middle
    // -- Top --
    (cIndex !== 0) && 
    (newBoard[cIndex - 1][rIndex] = !newBoard[cIndex - 1][rIndex]);
    // -- Right --
    (rIndex !== board[0].length - 1) && 
    (newBoard[cIndex][rIndex + 1] = !newBoard[cIndex][rIndex + 1]); 
    // -- Bottom --
    (cIndex !== board.length - 1) && 
    (newBoard[cIndex + 1][rIndex] = !newBoard[cIndex + 1][rIndex]);   
    // -- Left --
    (rIndex !== 0) && 
    (newBoard[cIndex][rIndex - 1] = !newBoard[cIndex][rIndex - 1]);  
    return newBoard;
}

export { createBoard, randomize, remapLights };