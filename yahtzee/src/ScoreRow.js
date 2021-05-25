import './ScoreRow.css';

function ScoreRow({ id, locked, score, title, lockScore, updatePoints }) {
  function handleClick(){
    lockScore(id, score);
    updatePoints(score);
  }

  if(locked === undefined){
    return(
      <tr className="ScoreRow-locked">
        <td className="ScoreRow-item-title" colSpan="10">{title}</td>
        <td className="ScoreRow-item-score" colSpan="2">{score}</td>
      </tr>
    )
  }

  return (
    <tr className={ (!locked) ? "ScoreRow" : "ScoreRow-locked" } onClick={ (!locked) ? handleClick : undefined } >
      <td className="ScoreRow-item-title" colSpan="10">{title}</td>
      <td className="ScoreRow-item-score" colSpan="2">{score}</td>
    </tr>
  )
}

export default ScoreRow;