import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Die from './Die';
import './Game.css';
import ScoreTable from './ScoreTable';

class Game extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      dice: [],
      lockedDice: [false, false, false, false, false],
      points: 0,
      rerolls: 5
    }
    this.toggleLock = this.toggleLock.bind(this)
    this.resetGame = this.resetGame.bind(this)
    this.rollDice = this.rollDice.bind(this);
  }

  rollDice(){
    const { dice, lockedDice } = this.state;
    let newDice = lockedDice.map((locked, index) => (
      (!locked) ? Math.floor(Math.random() * 6 + 1) : dice[index]
    ));
    this.setState(prevState => {
      return { dice: newDice, rerolls: prevState.rerolls - 1 };
    });
  }

  toggleLock(index){
    let newLockedDice = [ ...this.state.lockedDice ];
    newLockedDice.splice(index, 1, !this.state.lockedDice[index]);
    this.setState({ lockedDice: newLockedDice });
  }
  
  render() {
    return (
      <div className='Game'>
        <header className='Game-header'>
          <h1 className='Game-title'>Yahtzee!</h1>
            {(this.state.rerolls > 0) ? this.renderDice() : this.renderGameOver()}
        </header>
        <ScoreTable dice={this.state.dice} points={this.state.points} />
      </div>
    )
  }

  renderDice(){
    let { dice, lockedDice, rerolls } = this.state;
    return (
      <section className='Game-dice-section'>
        <div className="Game-dice">
          { dice.map((die, index) => (
            <Die key={uuidv4()} id={index} locked={lockedDice[index]} toggleLock={this.toggleLock} value={die} />
          ))}    
        </div>
        <div className='Game-button-wrapper'>
          <button className='Game-reroll' onClick={this.rollDice} >{rerolls} Rerolls Left</button>
        </div>
      </section>
    )
  }

  renderGameOver(){
    return (
      <section className="Game-over-section">
        <div className="Game-over-title"> Game Over!  You scored points. </div>
        <div className='Game-button-wrapper'>
          <button className='Game-reroll' onClick={this.resetGame}>Restart Game</button>
        </div>
      </section>
    )
  }

  resetGame(){
    this.setState({ 
      dice: [], 
      lockedDice:[ false, false, false, false, false ],
      points: 0,
      rerolls: 5
    });
  }
}

export default Game;