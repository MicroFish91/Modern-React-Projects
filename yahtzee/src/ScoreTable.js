import React, { Component } from 'react';
import ScoreRow from './ScoreRow';
import './ScoreTable.css';

class ScoreTable extends Component {
  render() {
    return (
      <div className="ScoreTable">
        <section className="ScoreTable-upper-section">
          <h2 className="ScoreTable-upper-title">Upper</h2>
          <table>
            <tbody>
              <ScoreRow title={"Ones"} score={1} />
              <ScoreRow title={"Twos"} score={1} />
              <ScoreRow title={"Threes"} score={1} />
              <ScoreRow title={"Fours"} score={1} />
              <ScoreRow title={"Fives"} score={1} />
              <ScoreRow title={"Sixes"} score={1} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-lower-section">
          <h2 className="ScoreTable-lower-title">Lower</h2>
          <table>
            <tbody>
              <ScoreRow title={"Three of Kind"} score={1} />
              <ScoreRow title={"Four of Kind"} score={1} />
              <ScoreRow title={"Full House"} score={1} />
              <ScoreRow title={"Small Straight"} score={1} />
              <ScoreRow title={"Large Straight"} score={1} />
              <ScoreRow title={"Yahtzee"} score={1} />
              <ScoreRow title={"Chance"} score={1} />
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default ScoreTable;