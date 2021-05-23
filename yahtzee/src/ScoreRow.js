import './ScoreRow.css';

function ScoreRow({ id, locked, score, title, lockScore, updatePoints }) {
  function handleClick(){
    lockScore(id, score);
    updatePoints(score);
  }

  if(locked === undefined){
    return(
      <tr className="ScoreRow">
        <td className="ScoreRow-item-title">{title}</td>
        <td className="ScoreRow-item-score">{score}</td>
      </tr>
    )
  }

  return (
    <tr className={ (!locked) ? "ScoreRow" : "ScoreRow-locked" } onClick={ (!locked) ? handleClick : undefined } >
      <td className="ScoreRow-item-title">{title}</td>
      <td className="ScoreRow-item-score">{score}</td>
    </tr>
  )
}

export default ScoreRow;