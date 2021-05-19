import React, { Component } from 'react';
import './Game.css';
import ScoreTable from './ScoreTable';

class Game extends Component {
  render() {
    return (
      <div className='Game'>
        <header className='Game-header'>
          <h1 className='Game-title'>Yahtzee!</h1>
          <section className='Game-dice-section'>
            <div className="Game-dice">
              <div className="die">Dice 1</div>
              <div className="die">Dice 2</div>
              <div className="die">Dice 3</div>
              <div className="die">Dice 4</div>
              <div className="die">Dice 5</div>
            </div>
            <div className='Game-button-wrapper'>
              <button className='Game-reroll'>Rerolls Left</button>
            </div>
          </section>
        </header>
        <ScoreTable />
      </div>
    )
  }
}

export default Game;