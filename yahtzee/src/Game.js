import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Die from './Die';
import './Game.css';
import ScoreTable from './ScoreTable';

class Game extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      clearScores: false,
      dice: [],
      lockedDice: new Array(5).fill(false),
      points: 0,
      rerolls: 5,
      scoresLocked: 0
    }
    this.incScoresLocked = this.incScoresLocked.bind(this);
    this.resetClearScores = this.resetClearScores.bind(this);
    this.resetTurn = this.resetTurn.bind(this);
    this.restartGame = this.restartGame.bind(this)
    this.rollDice = this.rollDice.bind(this);
    this.toggleLock = this.toggleLock.bind(this);
    this.updatePoints = this.updatePoints.bind(this);
  }

  incScoresLocked(){
    let newScoresLocked = this.state.scoresLocked;
    newScoresLocked++;
    this.setState({ scoresLocked: newScoresLocked });
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
  
  render() {
    let { dice, lockedDice, rerolls, scoresLocked } = this.state;
    return (
      <div className='Game'>
        <header className='Game-header'>
          <h1 className='Game-title'>Yahtzee!</h1>
          <section className='Game-dice-section'>
          { (scoresLocked !== 13) && ( 

            <div className="Game-dice">
              { dice.map((die, index) => (
                <Die 
                key={ uuidv4() } 
                id={ index } 
                locked={ lockedDice[index] } 
                toggleLock={ this.toggleLock } 
                value={ die } />
              ))}    
            </div> 
            
          )}
            { (rerolls > 0 && scoresLocked !== 13) && this.renderRollButton() }
            { (scoresLocked === 13) && this.renderGameOver() }
          </section>
        </header>

        <ScoreTable 
        clearScores={ this.state.clearScores }
        dice={ this.state.dice }
        incScoresLocked={ this.incScoresLocked } 
        resetTurn={ this.resetTurn } 
        resetClearScores={ this.resetClearScores }
        updatePoints={ this.updatePoints } />
      </div>
    )
  }

  restartGame(){
    this.setState({
      clearScores: true,
      dice: [],
      lockedDice: new Array(5).fill(false),
      points: 0,
      rerolls: 5,
      scoresLocked: 0
    });
  }

  resetTurn(){
    this.setState({ 
      dice: [], 
      lockedDice: new Array(5).fill(false),
      rerolls: 5
    });
  }

  renderGameOver(){
    return (
      <div className="Game-over-section">
        Game Over.  You scored {this.state.points} points!
        <div className='Game-button-wrapper'>
          <button className='Game-reroll' onClick={this.restartGame} >Restart Game</button>
        </div>
      </div>
    )
  }

  renderRollButton(){
    let { rerolls } = this.state;
    return (
      <div className='Game-button-wrapper'>
        <button className='Game-reroll' onClick={this.rollDice} >{rerolls} Rerolls Left</button>
      </div>
    )
  }

  resetClearScores(){
    this.setState({ clearScores: false });
  }

  toggleLock(index){
    let newLockedDice = [ ...this.state.lockedDice ];
    newLockedDice.splice(index, 1, !this.state.lockedDice[index]);
    this.setState({ lockedDice: newLockedDice });
  }

  updatePoints(points){
    let newPoints = this.state.points + points;
    this.setState({ points: newPoints });
  }
}

export default Game;