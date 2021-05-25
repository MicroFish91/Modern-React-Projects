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
    this.lockScore = this.lockScore.bind(this);
  }

  lockScore(id, score){
    let newLocked = [ ...this.state.locked ];
    let newScores = [ ...this.state.scores ];
    newLocked[id] = !newLocked[id];
    newScores[id] = score;
    this.props.resetTurn();
    this.props.incScoresLocked();
    this.setState({ locked: newLocked, scores: newScores });
  }
  
  render() {
    let { clearScores, dice, updatePoints } = this.props;
    let { locked, scores } = this.state;
    ( clearScores ) && this.resetTable();
    return (
      <div className="ScoreTable">
        <section className="ScoreTable-upper-section">
          <div className="ScoreTable-upper-title">Upper</div>
          <table className="ScoreTable-upper-table">
            <tbody>
              <ScoreRow 
              id={0}
              locked={ locked[0] }
              lockScore={ this.lockScore }
              title={"Ones"}  
              score={ (!locked[0]) ? countAndSumInteger(1, dice) : scores[0] } 
              updatePoints={ updatePoints } />

              <ScoreRow 
              id={1}
              locked={ locked[1] } 
              lockScore={ this.lockScore } 
              title={"Twos"} 
              score={ (!locked[1]) ? countAndSumInteger(2, dice) : scores[1] } 
              updatePoints={ updatePoints } />

              <ScoreRow
              id={2} 
              locked={ locked[2] } 
              lockScore={ this.lockScore}
              title={"Threes"} 
              score={ (!locked[2]) ? countAndSumInteger(3, dice) : scores[2] } 
              updatePoints={ updatePoints } />

              <ScoreRow
              id={3} 
              locked={ locked[3] } 
              lockScore={ this.lockScore }
              title={"Fours"} 
              score={ (!locked[3]) ? countAndSumInteger(4, dice) : scores[3] } 
              updatePoints={ updatePoints } />
              
              <ScoreRow 
              id={4}
              locked={ locked[4] } 
              lockScore={ this.lockScore }
              title={"Fives"}
              score={ (!locked[4]) ? countAndSumInteger(5, dice) : scores[4] } 
              updatePoints={ updatePoints } />

              <ScoreRow 
              id={5}
              locked={ locked[5] } 
              lockScore={ this.lockScore }
              title={"Sixes"} 
              score={ (!locked[5]) ? countAndSumInteger(6, dice) : scores[5] } 
              updatePoints={ updatePoints } />

              <ScoreRow
              score={ sum(scores.slice(0, 6)) }
              title={"Upper Total"} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-lower-section">
          <div className="ScoreTable-lower-title">Lower</div>
          <table className="ScoreTable-upper-table">
            <tbody>
              <ScoreRow
              id={6} 
              locked={ locked[6] } 
              lockScore={ this.lockScore }
              title={"Three of Kind"} 
              score={ (!locked[6]) ? numOfKind(3, dice) : scores[6] } 
              updatePoints={ updatePoints } />


              <ScoreRow 
              id={7}
              locked={ locked[7] } 
              lockScore={ this.lockScore }
              title={"Four of Kind"} 
              score={ (!locked[7]) ? numOfKind(4, dice) : scores[7] } 
              updatePoints={ updatePoints } />

              <ScoreRow
              id={8} 
              locked={ locked[8] } 
              lockScore={ this.lockScore }
              title={"Full House"} 
              score={ (!locked[8]) ? fullHouse(dice) : scores[8] } 
              updatePoints={ updatePoints } />

              <ScoreRow 
              id={9}
              locked={ locked[9] } 
              lockScore={ this.lockScore }
              title={"Small Straight"} 
              score={ (!locked[9]) ? straight(4, dice) : scores[9] } 
              updatePoints={ updatePoints } />

              <ScoreRow
              id={10} 
              locked={ locked[10] } 
              lockScore={ this.lockScore }
              title={"Large Straight"} 
              score={ (!locked[10]) ? straight(5, dice) : scores[10] } 
              updatePoints={ updatePoints } />

              <ScoreRow
              id={11} 
              locked={ locked[11] } 
              lockScore={ this.lockScore }
              title={"Yahtzee"} 
              score={ (!locked[11]) ? yahtzee(dice) : scores[11] } 
              updatePoints={ updatePoints } />

              <ScoreRow 
              id={12}
              locked={ locked[12] } 
              lockScore={ this.lockScore }
              title={"Chance"} 
              score={ (!locked[12]) ? sum(dice) : scores[12] } 
              updatePoints={ updatePoints } />

              <ScoreRow
              score={ sum(scores.slice(6)) }
              title={"Lower Total"} />
            </tbody>
          </table>
        </section>
      </div>
    )
  }

  resetTable(){
    this.props.resetClearScores();
    this.setState({
      locked: new Array(13).fill(false),
      scores: new Array(13).fill(0)
    });
  }
}

export default ScoreTable;