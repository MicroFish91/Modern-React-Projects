import React, { Component } from 'react';
import { countAndSumInteger, fullHouse, numOfKind, straight, sum, yahtzee } from './scoreComputations';
import ScoreRow from './ScoreRow';
import './ScoreTable.css';

class ScoreTable extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    let { dice } = this.props;
    return (
      <div className="ScoreTable">
        <section className="ScoreTable-upper-section">
          <h2 className="ScoreTable-upper-title">Upper</h2>
          <table>
            <tbody>
              <ScoreRow title={"Ones"} score={ countAndSumInteger(1, dice) } />
              <ScoreRow title={"Twos"} score={ countAndSumInteger(2, dice) } />
              <ScoreRow title={"Threes"} score={ countAndSumInteger(3, dice) } />
              <ScoreRow title={"Fours"} score={ countAndSumInteger(4, dice) } />
              <ScoreRow title={"Fives"} score={ countAndSumInteger(5, dice) } />
              <ScoreRow title={"Sixes"} score={ countAndSumInteger(6, dice) } />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-lower-section">
          <h2 className="ScoreTable-lower-title">Lower</h2>
          <table>
            <tbody>
              <ScoreRow title={"Three of Kind"} score={ numOfKind(3, dice) } />
              <ScoreRow title={"Four of Kind"} score={ numOfKind(4, dice) } />
              <ScoreRow title={"Full House"} score={ fullHouse(dice) } />
              <ScoreRow title={"Small Straight"} score={ straight(4, dice) } />
              <ScoreRow title={"Large Straight"} score={ straight(5, dice) } />
              <ScoreRow title={"Yahtzee"} score={ yahtzee(dice) } />
              <ScoreRow title={"Chance"} score={ sum(dice) } />
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default ScoreTable;