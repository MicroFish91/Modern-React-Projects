import React, { Component } from 'react';
import { countAndSumInteger, fullHouse, numOfKind, straight, sum, yahtzee } from './scoreComputations';
import ScoreRow from './ScoreRow';
import './ScoreTable.css';

class ScoreTable extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       locked: new Array(13).fill(false),
       scores: new Array(13).fill(0)
    }
    this.lockScore = this.lockScore.bind(this)
  }
  
  render() {
    let { dice } = this.props;
    let { locked, scores } = this.state;
    return (
      <div className="ScoreTable">
        <section className="ScoreTable-upper-section">
          <h2 className="ScoreTable-upper-title">Upper</h2>
          <table>
            <tbody>
              <ScoreRow 
              id={0}
              locked={ locked[0] } 
              score={ (!locked[0]) ? countAndSumInteger(1, dice) : scores[0] } 
              title={"Ones"} 
              lockScore={ this.lockScore } />

              <ScoreRow 
              id={1}
              locked={ locked[1] } 
              score={ (!locked[1]) ? countAndSumInteger(2, dice) : scores[1] } 
              title={"Twos"} 
              lockScore={ this.lockScore } />

              <ScoreRow
              id={2} 
              locked={ locked[2] } 
              score={ (!locked[2]) ? countAndSumInteger(3, dice) : scores[2] } 
              title={"Threes"} 
              lockScore={ this.lockScore} />

              <ScoreRow
              id={3} 
              locked={ locked[3] } 
              score={ (!locked[3]) ? countAndSumInteger(4, dice) : scores[3] } 
              title={"Fours"} 
              lockScore={ this.lockScore } />
              
              <ScoreRow 
              id={4}
              locked={ locked[4] } 
              score={ (!locked[4]) ? countAndSumInteger(5, dice) : scores[4] } 
              title={"Fives"} 
              lockScore={ this.lockScore } />

              <ScoreRow 
              id={5}
              locked={ locked[5] } 
              score={ (!locked[5]) ? countAndSumInteger(6, dice) : scores[5] } 
              title={"Sixes"} 
              lockScore={ this.lockScore } />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-lower-section">
          <h2 className="ScoreTable-lower-title">Lower</h2>
          <table>
            <tbody>
              <ScoreRow
              id={6} 
              locked={ locked[6] } 
              score={ (!locked[6]) ? numOfKind(3, dice) : scores[6] } 
              title={"Three of Kind"} 
              lockScore={ this.lockScore } />

              <ScoreRow 
              id={7}
              locked={ locked[7] } 
              score={ (!locked[7]) ? numOfKind(4, dice) : scores[7] } 
              title={"Four of Kind"} 
              lockScore={ this.lockScore } />

              <ScoreRow
              id={8} 
              locked={ locked[8] } 
              score={ (!locked[8]) ? fullHouse(dice) : scores[8] } 
              title={"Full House"} 
              lockScore={ this.lockScore } />

              <ScoreRow 
              id={9}
              locked={ locked[9] } 
              score={ (!locked[9]) ? straight(4, dice) : scores[9] } 
              title={"Small Straight"} 
              lockScore={ this.lockScore } />

              <ScoreRow
              id={10} 
              locked={ locked[10] } 
              score={ (!locked[10]) ? straight(5, dice) : scores[10] } 
              title={"Large Straight"} 
              lockScore={ this.lockScore } />

              <ScoreRow
              id={11} 
              locked={ locked[11] } 
              score={ (!locked[11]) ? yahtzee(dice) : scores[11] } 
              title={"Yahtzee"} 
              lockScore={ this.lockScore } />

              <ScoreRow 
              id={12}
              locked={ locked[12] } 
              score={ (!locked[12]) ? sum(dice) : scores[12] } 
              title={"Chance"} 
              lockScore={ this.lockScore } />
            </tbody>
          </table>
        </section>
      </div>
    )
  }

  lockScore(id, score){
    let newLocked = [ ...this.state.locked ];
    let newScores = [ ...this.state.scores ];
    newLocked[id] = !newLocked[id];
    newScores[id] = score;
    this.setState({ locked: newLocked, scores: newScores });
  }
}

export default ScoreTable;